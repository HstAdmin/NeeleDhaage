﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Common
{
    public static class ApiPath
    {
        public static string APIBaseUrl { get; set; }

        public static class ProductCategory
        {
            public static string GetAllProductCategories { get { return "api/ProductCategory/GetAllProductCategories"; } }

        }

        public static class Product
        {
            public static string GetProductList { get { return "api/Product/GetProductList"; } }
        }
    }
}