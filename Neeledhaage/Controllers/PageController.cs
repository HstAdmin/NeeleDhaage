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

namespace Neeledhaage.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index(string page)
        {
            PageVM pmodel = new PageVM();
            if (string.IsNullOrEmpty(page))
                page = "home";
            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                if (!db.tblPages.Any(x => x.Slug.Equals(page)))
                {
                    return RedirectToAction("Index", new { page = "" });
                }

                tblPage tp = db.tblPages.Where(x => x.Slug == page).FirstOrDefault();
                ViewBag.PageTitle = tp.Title;
                if (tp.HasSidebar == true)
                {
                    ViewBag.Sidebar = "Yes";
                }
                else
                {
                    ViewBag.Sidebar = "No";
                }
                return View(tp);
            }

            //return View();
        }

        public ActionResult PagesMenuPartial()
        {
            // Declare a list of PageVM
            List<tblPage> pageVMList;

            // Get all pages except home
            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                pageVMList = db.tblPages.ToArray().OrderBy(x => x.Sorting).Where(x => x.Slug != "home").ToList();
            }
            // Return partial view with list
            return PartialView(pageVMList);
        }
        public ActionResult SidebarPartial()
        {
            // Declare model
            SidebarVM model;

            // Init model
            using (NeeledhaageEntities db = new NeeledhaageEntities())
            {
                tblSidebar dto = db.tblSidebars.Find(1);

                return PartialView(dto);
            }

            // Return partial view with model

        }
    }
}