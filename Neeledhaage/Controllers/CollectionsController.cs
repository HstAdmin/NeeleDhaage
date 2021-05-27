using System.Threading.Tasks;
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
    public class CollectionsController : BaseController
    {
      
        public ActionResult Index()
        {
            //var result = await APIGetCaller<List<ProductCategoriesModel>>(ApiPath.ProductCategory.GetAllProductCategories);
            //if (result != null) { ViewBag.menus = result.Data; }

            return View();
           
        }

        //[Route("Collections/category/{id}/{name}")]
        //public async Task<ActionResult> Category(int id, string name)
        //{
        //    try
        //    {
        //        ViewBag.CategoryName = name;
        //        ViewBag.CategoryId = id;
        //        var result = await APIGetCaller<List<DropdownModel>>(ApiPath.Product.GetTags);
        //        ViewData["Tags"] = result.Data;
        //        return View();
        //    }
        //    catch (Exception ex)
        //    {
        //        string msg = ex.Message;
        //        return View();
        //    }
        //}
        [Route("Collections/ProductList/{id}/{name}")]
        public async Task<ActionResult> ProductList(int id, string name)
        {
            ViewBag.CategoryName = name.ToUpper();
            ProductListFilterVM filters = new ProductListFilterVM();
            filters.CategoryId = id;
            try
            {
                var result =  APIPostCaller<ProductListFilterVM, ProductBaseModelVM>(ApiPath.Product.GetProductList, filters);
                return View(result.Data);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }

        [Route("Collections/product-details/{id}/{variantId?}")]
        public async Task<ActionResult> ProductDetails(int id, int variantId = 0)
        {
            try
            {
                // Return view with model
                ViewBag.VariantId = variantId;
                var result = await APIGetCaller<ProductVM>(ApiPath.Product.GetProductById(id));
                return View("ProductDetails", result.Data);

            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return View();
            }
        }

    }
}
