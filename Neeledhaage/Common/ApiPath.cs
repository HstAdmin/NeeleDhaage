using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Common
{
    public static class ApiPath
    {
        public static string APIBaseUrl { get; set; }
        public static string ImageBasePath { get; set; }

        public static class ProductCategory
        {
            public static string GetAllProductCategories { get { return "api/ProductCategory/GetAllProductCategories"; } }

        }

        public static class Product
        {
            public static string GetProductList { get { return "api/Product/GetProductList"; } }
            public static string GetTags { get { return "api/Product/GetTags"; } }
            public static string GetProductById(int id) { return "api/Product/GetProductById/" + id; }
            
            public static string GetCartProductsByCustomerId(int id) { return "api/Product/GetCartProducts/" + id; }
            public static string AddCart { get { return "api/Product/AddCart"; } }
            public static string RemoveCart { get { return "api/Product/RemoveCart"; } }
            public static string GetAll { get { return "api/Product/GetAll"; } }



        }

        public static class Customer
        {
            public static string SaveCustomer { get { return "api/Customer/SaveCustomer"; } }
            public static string ValidateCustomer { get { return "api/Customer/ValidateCustomer"; } }
        }
    }
}