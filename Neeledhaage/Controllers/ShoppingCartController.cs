using Neeledhaage.Dal;
using Neeledhaage.Models.Cart;
using Razorpay.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using System.Configuration;
using Neeledhaage.Common;
using System.Threading.Tasks;
using Neeledhaage.Models;
using Neeledhaage.Models.Product;
using Neeledhaage.Models.Common;


namespace Neeledhaage.Controllers
{
    public class ShoppingCartController : BaseController
    {



        public ActionResult Index()
        {
            return Redirect("~/shoppingcart/cart");
        }


        public async Task<ActionResult> Cart()
        {
            int customerid = 1;
            var result = await APIGetCaller<List<CartVarientModel>>(ApiPath.Product.GetCartProductsByCustomerId(customerid));
            Neeledhaage.Models.CartModel productModel = new Neeledhaage.Models.CartModel();
            if (result != null)
            {
                productModel.cartModel = result.Data;
            }
            return View(productModel);

        }


        public async Task<ActionResult> AddCart(int varientId)
        {
            Neeledhaage.Models.Product.CartModel filters = new Neeledhaage.Models.Product.CartModel();
            int customerid = 1;
            filters.CustomerId = customerid;
            filters.VarientId = varientId;
            try
            {
                var result = APIPostCaller<Neeledhaage.Models.Product.CartModel, Neeledhaage.Models.Product.CartModel>(ApiPath.Product.AddCart, filters);
                return PartialView(result.Data);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return PartialView();
            }
        }
        public async Task<ActionResult> RemoveCart(int varientId)
        {
            Neeledhaage.Models.Product.CartModel filters = new Neeledhaage.Models.Product.CartModel();
            int customerid = 1;
            filters.CustomerId = customerid;
            filters.VarientId = varientId;
            try
            {
                var result = APIPostCaller<Neeledhaage.Models.Product.CartModel, Neeledhaage.Models.Product.CartModel>(ApiPath.Product.RemoveCart, filters);
                return RedirectToAction("Cart", "ShoppingCart");
                // return PartialView(result.Data);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }



        //public async Task<ActionResult> Cart(int id, int variantId)
        //{
        //    try
        //    {
        //        // Return view with model
        //        ViewBag.VariantId = variantId;
        //        var result = await APIGetCaller<ProductVarientModel, ProductVarientModel>(ApiPath.Cart.GetCartProductsByCustomerId(id));
        //        return View("Cart", result.Data);

        //    }
        //    catch (Exception ex)
        //    {
        //        string msg = ex.Message;
        //        return View();
        //    }
        //}



        //public async Task<ActionResult> AddCart(int varientId)
        //{
        //    Hst.Model.Entities.CartModel filters = new Hst.Model.Entities.CartModel();
        //    int customerid = Convert.ToInt32(_httpContextAccessor.HttpContext.Session.GetInt32("Customerid"));
        //    filters.CustomerId = customerid;
        //    filters.VarientId = varientId;
        //    try
        //    {
        //        var result = await APIPostCaller<Hst.Model.Entities.CartModel, Hst.Model.Entities.CartModel>(ApiPath.Product.AddCart, filters);
        //        return PartialView(result.Data);
        //    }
        //    catch (Exception ex)
        //    {
        //        string msg = ex.Message;
        //        return PartialView();
        //    }
        //}
        //public async Task<IActionResult> RemoveCart(int varientId)
        //{
        //    Hst.Model.Entities.CartModel filters = new Hst.Model.Entities.CartModel();
        //    int customerid = Convert.ToInt32(_httpContextAccessor.HttpContext.Session.GetInt32("Customerid"));
        //    filters.CustomerId = customerid;
        //    filters.VarientId = varientId;
        //    try
        //    {
        //        var result = await APIPostCaller<Hst.Model.Entities.CartModel, Hst.Model.Entities.CartModel>(ApiPath.Product.RemoveCart, filters);
        //        return RedirectToAction("Cart", "ShoppingCart");
        //        // return PartialView(result.Data);
        //    }
        //    catch (Exception ex)
        //    {
        //        string msg = ex.Message;
        //        return View();
        //    }
        //}



        public ActionResult Select()
        {
            return View();
        }

        public ActionResult ShippingPolicy()
        {
            return View("~/Views/Shared/_ShippingPolicy.cshtml");
        }

    }
}
