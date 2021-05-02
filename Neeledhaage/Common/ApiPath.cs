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
        }

        public static class User
        {
            public static string SaveUser { get { return "api/User/SaveUser"; } }
            public static string ValidateUser { get { return "api/User/ValidateUser"; } }
        }
    }
}