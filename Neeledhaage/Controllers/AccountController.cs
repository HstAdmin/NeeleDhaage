using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Neeledhaage.Models.Account;
using Neeledhaage.Models.Cart;
using Neeledhaage.Models.Pages;
using Neeledhaage.Models.Shop;
using Neeledhaage.Dal;
using System.Web.Security;
using Neeledhaage.Common;

namespace Neeledhaage.Controllers
{

    public class AccountController : BaseController
    {
        // GET: Account
        public ActionResult Index()
        {
            return Redirect("~/account/login");
        }
        [HttpGet]
        public ActionResult Login()
        {
            // Confirm user is not logged in

            string username = User.Identity.Name;

            if (!string.IsNullOrEmpty(username))
                return RedirectToAction("user-profile");

            // Return view
            return View();
        }
        // POST: /account/login
        [HttpPost]
        public ActionResult Login(CommonviewModel model)
        {
            // Check model state
            if (!ModelState.IsValid)
            {
                //return View(model);
                return Redirect("~/account/LoginUser");
            }

            // Check if the user is valid
            /*
            bool isValid = false;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                if (db.tblUsers.Any(x => x.Username.Equals(model.LoginUserVM.Username) && x.Password.Equals(model.LoginUserVM.Password)))
                {
                    isValid = true;
                }
            }

            if (!isValid)
            {
                ModelState.AddModelError("", "Invalid username or password.");
                return View(model);
            }
            else
            {
                FormsAuthentication.SetAuthCookie(model.LoginUserVM.Username, model.LoginUserVM.RememberMe);
                return Redirect(FormsAuthentication.GetRedirectUrl(model.LoginUserVM.Username, model.LoginUserVM.RememberMe));
                //return RedirectToAction("Index","Home");
            }*/

            var obj = new UserViewModel()
            {
                UserName = model.LoginUserVM.Username,
                Password = model.LoginUserVM.Password,
                UserTypeId = 2//Customer
            };
            var objUser = APIPostCaller<UserViewModel, UserViewModel>(ApiPath.User.ValidateUser, obj);
            if (objUser != null)
            {
                if (!string.IsNullOrEmpty(objUser.Message))
                {
                    ModelState.AddModelError("LoginError", "Invalid username or password.");
                    return View("LoginUser", model);
                }
                else
                {
                    var authTicket = new FormsAuthenticationTicket(
                    1,                             // version
                    objUser.Data.FirstName + " " + objUser.Data.LastName,                      // user name
                    DateTime.Now,                  // created
                    DateTime.Now.AddMinutes(20),   // expires
                    model.LoginUserVM.RememberMe,                    // persistent?
                    "Customer"                        // can be used to store roles
                    );

                    string encryptedTicket = FormsAuthentication.Encrypt(authTicket);

                    var authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                    System.Web.HttpContext.Current.Response.Cookies.Add(authCookie);
                    return Redirect(FormsAuthentication.GetRedirectUrl(model.LoginUserVM.Username, model.LoginUserVM.RememberMe));
                }
            }
            ModelState.AddModelError("LoginError", "Invalid username or password.");
            return View(model);
        }
        // GET: /account/create-account
        [ActionName("create-account")]
        [HttpGet]
        public ActionResult CreateAccount()
        {
            return View("CreateAccount");
        }
        [ActionName("create-account")]
        [HttpPost]
        public ActionResult CreateAccount(CommonviewModel model)
        {
            // Check model state
            if (!ModelState.IsValid)
            {
                return View("LoginUser", model);
            }

            // Check if passwords match
            if (!model.UserVM.Password.Equals(model.UserVM.ConfirmPassword))
            {
                ModelState.AddModelError("RegisterError", "Passwords do not match.");
                return View("LoginUser", model);
            }
            var input = new UserViewModel()
            {
                FirstName = model.UserVM.FirstName,
                LastName = model.UserVM.LastName,
                Email = model.UserVM.EmailAddress,
                Mobile = model.UserVM.MobileNo,
                Password = model.UserVM.Password,
                UserTypeId = 2//customer
            };

            var result = APIPostCaller<UserViewModel, UserViewModel>(ApiPath.User.SaveUser, input);
            if (result != null && result.Data != null && result.Data.Id > 0)
            {
                TempData["RegisterSM"] = "User Registered Successfully! Please Login With User Name .";
                return Redirect("~/account/LoginUser");
            }
            else
            {
                string message = result != null && result.Data != null && !string.IsNullOrEmpty(result.Data.ErrorMessage) ? result.Data.ErrorMessage : "Something went wrong.";
                ModelState.AddModelError("RegisterError", message);
                return View("LoginUser", model);
            }
            /*
            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Make sure username is unique
                if (db.tblUsers.Any(x => x.Username.Equals(model.UserVM.Username)))
                {
                    ModelState.AddModelError("", "Username " + model.UserVM.Username + " is already exist.");
                    model.UserVM.Username = "";
                    return View("LoginUser", model);
                }

                // Create userDTO
                tblUser userDTO = new tblUser()
                {
                    FirstName = model.UserVM.FirstName,
                    LastName = model.UserVM.LastName,
                    EmailAddress = model.UserVM.EmailAddress,
                    Username = model.UserVM.Username,
                    Password = model.UserVM.Password,
                    MobileNo = model.UserVM.MobileNo,
                    CreatedDate = DateTime.Now,
                    IsActive = model.UserVM.IsActive
                };

                // Add the DTO
                db.tblUsers.Add(userDTO);

                // Save
                db.SaveChanges();

                // Add to UserRolesDTO
                int id = userDTO.Id;
                if (id > 0)
                {
                    // Create a TempData message
                    TempData["SM"] = "User Registre Successfully ! Please Login With User Name .";
                }

                tblUserRole userRolesDTO = new tblUserRole()
                {
                    UserId = id,
                    RoleId = 2
                };

                db.tblUserRoles.Add(userRolesDTO);
                db.SaveChanges();
            }

            */



            // Redirect

        }
        // GET: /account/Logout
        [Authorize]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return Redirect("~/account/Loginuser");
        }
        [Authorize]
        public ActionResult UserNavPartial()
        {
            // Get username
            string username = User.Identity.Name;

            // Declare model
            UserNavPartialVM model;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get the user
                tblUser dto = db.tblUsers.FirstOrDefault(x => x.Username == username);

                // Build the model
                model = new UserNavPartialVM()
                {
                    FirstName = dto.FirstName,
                    LastName = dto.LastName
                };
            }

            // Return partial view with model
            return PartialView(model);
        }
        // GET: /account/user-profile
        [HttpGet]
        [ActionName("user-profile")]
        [Authorize]
        public ActionResult UserProfile()
        {
            // Get username
            string username = User.Identity.Name;

            // Declare model
            UserProfileVM model;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get user
                tblUser dto = db.tblUsers.FirstOrDefault(x => x.Username == username);

                // Build model
                // model = new UserProfileVM(dto);
                return View("UserProfile", dto);
            }

            // Return view with model
            // return View("UserProfile", model);
        }
        [HttpPost]
        [ActionName("user-profile")]
        [Authorize]
        public ActionResult UserProfile(UserProfileVM model)
        {
            // Check model state
            if (!ModelState.IsValid)
            {
                return View("UserProfile", model);
            }

            // Check if passwords match if need be
            if (!string.IsNullOrWhiteSpace(model.Password))
            {
                if (!model.Password.Equals(model.ConfirmPassword))
                {
                    ModelState.AddModelError("", "Passwords do not match.");
                    return View("UserProfile", model);
                }
            }

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get username
                string username = User.Identity.Name;

                // Make sure username is unique
                if (db.tblUsers.Where(x => x.Id != model.Id).Any(x => x.Username == username))
                {
                    ModelState.AddModelError("", "Username " + model.Username + " already exists.");
                    model.Username = "";
                    return View("UserProfile", model);
                }

                // Edit DTO
                tblUser dto = db.tblUsers.Find(model.Id);

                dto.FirstName = model.FirstName;
                dto.LastName = model.LastName;
                dto.EmailAddress = model.EmailAddress;
                dto.Username = model.Username;

                if (!string.IsNullOrWhiteSpace(model.Password))
                {
                    dto.Password = model.Password;
                }

                // Save
                db.SaveChanges();
            }

            // Set TempData message
            TempData["SM"] = "You have edited your profile!";

            // Redirect
            return Redirect("~/account/user-profile");
        }

        // GET: /account/Orders
        [Authorize(Roles = "User")]
        public ActionResult Orders()
        {
            // Init list of OrdersForUserVM
            List<OrdersForUserVM> ordersForUser = new List<OrdersForUserVM>();

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Get user id
                tblUser user = db.tblUsers.Where(x => x.Username == User.Identity.Name).FirstOrDefault();
                int userId = user.Id;

                // Init list of OrderVM
                List<tblOrder> orders = db.tblOrders.Where(x => x.UserId == userId).ToArray().ToList();

                // Loop through list of OrderVM
                foreach (var order in orders)
                {
                    // Init products dict
                    Dictionary<string, int> productsAndQty = new Dictionary<string, int>();

                    // Declare total
                    decimal total = 0m;

                    // Init list of OrderDetailsDTO
                    List<tblOrderDetail> orderDetailsDTO = db.tblOrderDetails.Where(x => x.OrderId == order.OrderId).ToList();

                    // Loop though list of OrderDetailsDTO
                    foreach (var orderDetails in orderDetailsDTO)
                    {
                        // Get product
                        tblProduct product = db.tblProducts.Where(x => x.Id == orderDetails.ProductId).FirstOrDefault();

                        // Get product price
                        decimal price = Convert.ToInt32(product.Price);

                        // Get product name
                        string productName = product.Name;

                        // Add to products dict
                        productsAndQty.Add(productName, Convert.ToInt32(orderDetails.Quantity));

                        // Get total
                        total += Convert.ToInt32(orderDetails.Quantity) * price;
                    }

                    // Add to OrdersForUserVM list
                    ordersForUser.Add(new OrdersForUserVM()
                    {
                        OrderNumber = order.OrderId,
                        Total = total,
                        ProductsAndQty = productsAndQty,
                        CreatedAt = Convert.ToDateTime(order.CreatedAt)
                    });
                }

            }

            // Return view with list of OrdersForUserVM
            return View(ordersForUser);
        }

        public ActionResult LoginUser()
        {
            string username = User.Identity.Name;

            if (!string.IsNullOrEmpty(username))
                return RedirectToAction("user-profile");
            return View();
        }

        [HttpPost]
        //public ActionResult CreateAccount(UserVM model)
        public ActionResult CreateAccountBB(CommonviewModel model)
        {
            // Check model state
            if (!ModelState.IsValid)
            {
                return View("CreateAccount", model);
            }

            // Check if passwords match
            if (!model.UserVM.Password.Equals(model.UserVM.ConfirmPassword))
            {
                ModelState.AddModelError("", "Passwords do not match.");
                return View("CreateAccount", model);
            }

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                // Make sure username is unique
                if (db.tblUsers.Any(x => x.Username.Equals(model.UserVM.Username)))
                {
                    ModelState.AddModelError("", "Username " + model.UserVM.Username + " is taken.");
                    model.UserVM.Username = "";
                    return View("CreateAccount", model);
                }

                // Create userDTO
                tblUser userDTO = new tblUser()
                {
                    FirstName = model.UserVM.FirstName,
                    LastName = model.UserVM.LastName,
                    EmailAddress = model.UserVM.EmailAddress,
                    Username = model.UserVM.Username,
                    Password = model.UserVM.Password
                };

                // Add the DTO
                db.tblUsers.Add(userDTO);

                // Save
                db.SaveChanges();

                // Add to UserRolesDTO
                int id = userDTO.Id;

                tblUserRole userRolesDTO = new tblUserRole()
                {
                    UserId = id,
                    RoleId = 2
                };

                db.tblUserRoles.Add(userRolesDTO);
                db.SaveChanges();
            }

            // Create a TempData message
            TempData["SM"] = "You are now registered and can login.";

            // Redirect
            return Redirect("~/account/Loginuser");
        }
        [HttpPost]

        public ActionResult LoginBB(CommonviewModel model)
        {
            // Check model state
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // Check if the user is valid

            bool isValid = false;

            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                if (db.tblUsers.Any(x => x.Username.Equals(model.LoginUserVM.Username) && x.Password.Equals(model.LoginUserVM.Password)))
                {
                    isValid = true;
                }
            }

            if (!isValid)
            {
                ModelState.AddModelError("", "Invalid username or password.");
                return View(model);
            }
            else
            {
                FormsAuthentication.SetAuthCookie(model.LoginUserVM.Username, model.LoginUserVM.RememberMe);
                return Redirect(FormsAuthentication.GetRedirectUrl(model.LoginUserVM.Username, model.LoginUserVM.RememberMe));
                //return RedirectToAction("Index","Home");
            }
        }
    }
}