using Neeledhaage.Dal;
using Neeledhaage.Models.Cart;
using Razorpay.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using System.Configuration;

namespace Neeledhaage.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        public ActionResult Index()
        {
            // Init the cart list
            var cart = Session["cart"] as List<CartVM> ?? new List<CartVM>();

            // Check if cart is empty
            if (cart.Count == 0 || Session["cart"] == null)
            {
                ViewBag.Message = "Your cart is empty.";
                return View();
            }

            // Calculate total and save to ViewBag

            decimal total = 0m;

            foreach (var item in cart)
            {
                total += item.Total;
            }

            ViewBag.GrandTotal = total;
            //RazorpayClient client = new RazorpayClient("rzp_live_5N3IMyomUi6v6q", "E9tmp3EvsSPlDlQ1d1FFiAx0");
            //Payment payment = client.Payment.Fetch(paymentId);

            //Dictionary <string, object> options = new Dictionary<string, object>();
            //options.Add("amount", "<amount>");
            //options.Add("currency", "<currency>");
            //Payment paymentCaptured = payment.Capture(options);
            // Return view with list
            return View(cart);
        }
        public ActionResult CartPartial()
        {
            var cart = Session["cart"] as List<CartVM> ?? new List<CartVM>();
            // Check if cart is empty
            if (cart.Count == 0 || Session["cart"] == null)
            {
                ViewBag.Message = "Your cart is empty.";
                return PartialView(cart);
            }

            // Calculate total and save to ViewBag
            decimal total = 0m;
            foreach (var item in cart)
            {
                total += item.Total;
            }
            ViewBag.GrandTotal = total;
            // Return view with list
            //return View(cart);
            return PartialView(cart);
        }

        public ActionResult AddToCartPartial(int id)
        {
            // Init CartVM list
            List<CartVM> cart = Session["cart"] as List<CartVM> ?? new List<CartVM>();

            // Init CartVM
            CartVM model = new CartVM();

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get the product
                Tbl_Inventory_Products product = db.Tbl_Inventory_Products.Find(id);

                // Check if the product is already in cart
                var productInCart = cart.FirstOrDefault(x => x.ProductId == id);

                // If not, add new
                if (productInCart == null)
                {
                    cart.Add(new CartVM()
                    {
                        ProductId = product.IP_ProductID,
                        ProductName = product.IP_ProductName,
                        Quantity = 1,
                        Price = Convert.ToInt32(product.IP_TargetPrice),
                        Image = product.IP_ImageName,
                        Imagepath = product.IP_ImagePath
                    });
                }
                else
                {
                    // If it is, increment
                    productInCart.Quantity++;
                }
            }

            // Get total qty and price and add to model

            int qty = 0;
            decimal price = 0m;

            foreach (var item in cart)
            {
                qty += item.Quantity;
                price += item.Quantity * item.Price;
            }

            model.Quantity = qty;
            model.Price = price;

            // Save cart back to session
            Session["cart"] = cart;

            // Return partial view with model
            return PartialView(cart);
        }
        // GET: /Cart/IncrementProduct
        public JsonResult IncrementProduct(int productId)
        {
            // Init cart list
            List<CartVM> cart = Session["cart"] as List<CartVM>;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get cartVM from list
                CartVM model = cart.FirstOrDefault(x => x.ProductId == productId);

                // Increment qty
                model.Quantity++;

                // Store needed data
                var result = new { qty = model.Quantity, price = model.Price };

                // Return json with data
                return Json(result, JsonRequestBehavior.AllowGet);
            }

        }

        // GET: /Cart/DecrementProduct
        public ActionResult DecrementProduct(int productId)
        {
            // Init cart
            List<CartVM> cart = Session["cart"] as List<CartVM>;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get model from list
                CartVM model = cart.FirstOrDefault(x => x.ProductId == productId);

                // Decrement qty
                if (model.Quantity > 1)
                {
                    model.Quantity--;
                }
                else
                {
                    model.Quantity = 0;
                    cart.Remove(model);
                }

                // Store needed data
                var result = new { qty = model.Quantity, price = model.Price };

                // Return json
                return Json(result, JsonRequestBehavior.AllowGet);
            }

        }


        // GET: /Cart/RemoveProduct
        public void RemoveProduct(int productId)
        {
            // Init cart list
            List<CartVM> cart = Session["cart"] as List<CartVM>;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get model from list
                CartVM model = cart.FirstOrDefault(x => x.ProductId == productId);

                // Remove model from list
                cart.Remove(model);
            }

        }

        public ActionResult PaypalPartial()
        {
            List<CartVM> cart = Session["cart"] as List<CartVM>;

            return PartialView(cart);
        }

        [HttpGet]
        public ActionResult CheckOut()
        {
            CheckOutModel checkOutModel  = PlaceOrder();
            if (checkOutModel.IsOrdercrated)
            {
                // Reset session
                Session["cart"] = null;
                return View(checkOutModel);
                                             
            }
            else { return RedirectToAction("Index", "Cart"); }
                            
        }
        // POST: /Cart/PlaceOrder
        [HttpPost]
        public CheckOutModel PlaceOrder()
        {
            bool IsRazorOrderCreated = false;
            CheckOutModel checkOutModel = new CheckOutModel();
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            try
            {
                // Get cart list
                List<CartVM> cart = Session["cart"] as List<CartVM>;

                // Get username
                string username = User.Identity.Name;
                int orderId = 0;
                using (NeeledhaageEntities db = new NeeledhaageEntities())
                {
                    // Init OrderDTO
                    tblOrder orderDTO = new tblOrder();

                    // Get user id
                    var userDetails = db.tblUsers.FirstOrDefault(x => x.Username == username);
                    int userId = userDetails.Id;
                    decimal Totalamount = cart.Sum(x => x.Total);
                    #region Create Order on RazorPay
                    Dictionary<string, object> input = new Dictionary<string, object>();
                    input.Add("amount", Totalamount); // this amount should be same as transaction amount
                    input.Add("currency", "INR");
                    input.Add("receipt", "NdCustId_" + userId);
                    input.Add("payment_capture", 1);
                    #region Test Account
                    //string key = "rzp_test_9EzlZHDRF5VQyy";
                    //string secret = "DOxJing7ltOQyE1mDdGOfxK1";
                    #endregion End
                    #region  Live Account
                    string key = ConfigurationManager.AppSettings["key"];// "rzp_live_mGwkzrvyPiXdqw";//
                    string secret = ConfigurationManager.AppSettings["secret"]; //"igHaHNAMqoU15uua2vvjfyLE";//
                    #endregion End
                    RazorpayClient client = new RazorpayClient(key, secret);
                    Order order = client.Order.Create(input);
                    if (order["id"].ToString() != "")
                    {
                        IsRazorOrderCreated = true;
                    }
                    #endregion

                    #region CreateOrderinDB
                    // Add to OrderDTO and save
                    orderDTO.UserId = userId;
                    orderDTO.CreatedAt = DateTime.Now;
                    orderDTO.TotalOrderAmount = Totalamount;
                    orderDTO.RazorPayOrderId = order["id"].ToString();
                    orderDTO.RazorStatus = order["status"].ToString();
                  //  orderDTO.OrderCode = "ND0000" + Convert.ToString(orderId);
                    db.tblOrders.Add(orderDTO);
                    db.SaveChanges();

                    // Get inserted id
                    orderId = orderDTO.OrderId;
                    if (orderId > 0)
                    {
                        //orderId = order["id"].ToString();
                        // Init OrderDetailsDTO
                        tblOrderDetail orderDetailsDTO = new tblOrderDetail();
                        // Add to OrderDetailsDTO
                        foreach (var item in cart)
                        {
                            orderDetailsDTO.OrderId = orderId;
                            orderDetailsDTO.UserId = userId;
                            orderDetailsDTO.ProductId = item.ProductId;
                            orderDetailsDTO.Quantity = item.Quantity;
                            orderDetailsDTO.Price = item.Price;
                            orderDetailsDTO.CreatedDate = DateTime.Now;
                            db.tblOrderDetails.Add(orderDetailsDTO);
                            db.SaveChanges();
                        }
                        if (IsRazorOrderCreated)
                        {
                            
                            checkOutModel.key = ConfigurationManager.AppSettings["key"];
                            checkOutModel.RazorOrderID= order["id"].ToString();
                            checkOutModel.OrderCode = "ND0000" + Convert.ToString(orderId);
                            checkOutModel.OrderAmount = Totalamount;
                            checkOutModel.RazorPayOrderAmount = Totalamount* 100;
                            checkOutModel.CustomerName = userDetails.FirstName + "" + userDetails.FirstName;
                            checkOutModel.Email = userDetails.EmailAddress;
                            checkOutModel.Contact = userDetails.MobileNo;
                            checkOutModel.Imagepath = "~/assets/default/images/logo.png";
                            checkOutModel.IsOrdercrated = true;
                        }
                    }
                    #endregion
                }

            }
            catch (Exception ex)
            {
                IsRazorOrderCreated = false;
                string msg = ex.Message;
            }
            return checkOutModel;

        }

        public ActionResult Paynow()
        {
            #region  Live Account
            string key = ConfigurationManager.AppSettings["key"];// "rzp_live_mGwkzrvyPiXdqw";//
            string secret = ConfigurationManager.AppSettings["secret"]; //"igHaHNAMqoU15uua2vvjfyLE";//
            #endregion End
            Dictionary<string, object> input = new Dictionary<string, object>();
            input.Add("key", 100); // this amount should be same as transaction amount
            input.Add("amount", "INR");
            input.Add("currency", "NdCustId_" + "100");
            input.Add("name", 100); // this amount should be same as transaction amount
            input.Add("description", "INR");
            input.Add("image", "NdCustId_" + "100");
            input.Add("order_id", 100); // this amount should be same as transaction amount
            input.Add("amount", "INR");
            input.Add("currency", "NdCustId_" + "100");
            input.Add("key", 100); // this amount should be same as transaction amount
            input.Add("amount", "INR");
            input.Add("currency", "NdCustId_" + "100");
            
            input.Add("payment_capture", 1);


            RazorpayClient client = new RazorpayClient(key, secret);
            var rzp1 = client.Payment.Capture(input);
           // var rzp1 = new Razorpay(options);
            return View();
        }
    }
}