using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Neeledhaage.Models.Account;
using Neeledhaage.Models.Cart;
using Neeledhaage.Models.Pages;
using Neeledhaage.Models.Shop;
using Neeledhaage.Dal;
using System.Threading.Tasks;
using Neeledhaage.Models.ProductCategory;
using Neeledhaage.Common;
using Neeledhaage.Models.Product;

namespace Neeledhaage.Controllers
{
    public class ShopController : BaseController
    {
        // GET: Shop
        public ActionResult Index()
        {
            return RedirectToAction("Index", "Pages");
        }
        public ActionResult CategoryMenuPartial()
        {
            try
            {

                var result = APIGetCaller<List<ProductCategoriesModel>>(ApiPath.ProductCategory.GetAllProductCategories);

                // Declare list of CategoryVM
                //List<tblCategory> categoryVMList;

                //List<Tbl_Inventory_Category> categoryVMList;
                //// Init the list
                //using (NeeledhaageEntities db = new NeeledhaageEntities())
                //{
                //    categoryVMList = db.Tbl_Inventory_Category.ToArray().OrderBy(x => x.IC_CategoryID)
                //        .OrderBy(O => O.Ic_OrderBy).ToList();
                //    categoryVMList = categoryVMList.Where(x => x.IC_IsActive == true).ToList();
                //}

                // Return partial with list
                return PartialView(result.Data);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }
        // GET: /shop/category/name
        [Route("shop/category/{id}/{name}")]
        public ActionResult Category(int id, string name)
        {
            try
            {
                var filters = new ProductListFilterVM() { CategoryId = id };
                var result = APIPostCaller<ProductListFilterVM, ProductBaseModelVM>(ApiPath.Product.GetProductList, filters);

                //// Declare a list of ProductVM

                //List<Tbl_Inventory_Products> productVMList;

                //using (NeeledhaageEntities db = new NeeledhaageEntities())
                //{
                //    int catId = 0;
                //    // Get category id
                //    Tbl_Inventory_Category categoryDTO = db.Tbl_Inventory_Category.Where(x => x.IC_Name.Trim() == name).FirstOrDefault();
                //    var parentCate = db.Tbl_Inventory_Category.Where(x => x.IC_CategoryID == categoryDTO.IC_ParentID).FirstOrDefault();
                //    if (categoryDTO != null)
                //    {
                //        catId = categoryDTO.IC_CategoryID;
                //        ViewBag.CategoryName = categoryDTO.IC_Name;
                //        ViewBag.Imageroot = parentCate.IC_Name + "/" + categoryDTO.IC_Name;
                //        TempData["Imageroot"] = parentCate.IC_Name + "/" + categoryDTO.IC_Name;
                //    }

                //    // Init the list
                //    productVMList = db.Tbl_Inventory_Products.ToArray().Where(x => x.IP_IC_CategoryID == catId && x.IP_IsActive == true).ToList();

                //    // Get category name
                //    //var productCat = db.Tbl_Inventory_Products.Where(x => x.IP_IC_CategoryID == catId).FirstOrDefault();
                //    //if (productCat != null)
                //    //{
                //    // ViewBag.CategoryName = productCat.IP_ProductName;
                //    //}
                //}

                // Return view with list
                return View(result.Data);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }
        [ActionName("product-details")]
        public ActionResult ProductDetails(string name)
        {
            try
            {
                // Declare the VM and DTO
                ProductVM model;
                //ProductDTO dto;
                Tbl_Inventory_Products dto;

                // Init product id
                int id = 0;
                string imageroot = string.Empty;
                using (NeeledhaageEntities db = new NeeledhaageEntities())
                {
                    // Check if product exists
                    if (!db.Tbl_Inventory_Products.Any(x => x.IP_SKU.Equals(name)))
                    {
                        return RedirectToAction("Index", "Shop");
                    }

                    // Init productDTO
                    dto = db.Tbl_Inventory_Products.Where(x => x.IP_SKU == name).FirstOrDefault();
                    // Get id
                    id = dto.IP_ProductID;
                    if (TempData["Imageroot"] != null)
                    {
                        imageroot = Convert.ToString(TempData["Imageroot"].ToString());
                    }
                    else
                    {
                        TempData["Imageroot"] = dto.IP_ImagePath;
                        imageroot = dto.IP_ImagePath;//Convert.ToString(TempData["Imageroot"].ToString());
                    }

                    // Init model
                    model = new ProductVM(dto);
                    // model.Imagepath = imageroot;
                }

                // Get gallery images
                //model.GalleryImages = Directory.EnumerateFiles(Server.MapPath("~/Images/Uploads/Products/" + id + "/Gallery/Thumbs"))
                //                                    .Select(fn => Path.GetFileName(fn));
                //model.GalleryImages = Directory.EnumerateFiles(Server.MapPath("~/Images/Products/" + imageroot + "/"+ Convert.ToString(model.ImageName)))
                //                                   .Select(fn => Path.GetFileName(fn));

                // Return view with model
                return View("ProductDetails", model);
                // return View("ProductDetails", dto);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }
    }
}