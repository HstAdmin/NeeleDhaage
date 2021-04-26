using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Neeledhaage.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult PrivacySecurity()
        {
            return View();
        }
        public ActionResult ReturnsExchanges()
        {
            return PartialView("_ReturnsExchanges");
        }
        public ActionResult ShippingPolicy()
        {
            return PartialView("_ShippingPolicy");
        }
        public ActionResult TermsConditions()
        {
            return PartialView("_TermsConditions");
        }

        public ActionResult AboutUs()
        {
            return PartialView("_AboutUs");
        }

        public ActionResult Shop()
        {
            return PartialView("_Shop");
        }
        public ActionResult ContactUs()
        {
            return PartialView("_ContactUs");
        }

        public ActionResult ArtisansWork()
        {
            return PartialView("_ArtisansWork");
        }
        public ActionResult OurProcess()
        {
            return PartialView("_OurProcess");
        }

        public ActionResult Video()
        {
            return PartialView("_Video");
        }
        public ActionResult TrackOrder()
        {
            return PartialView("TrackOrder");
        }
        public ActionResult BulkOrders()
        {
            return PartialView("BulkOrders");
        }
    }
}