using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Product
{
    public class ProductListFilterVM
    {
        public int CustomerId { get; set; }
        public int CategoryId { get; set; }
        public string BrandsIds { get; set; }
        public string DiscountPer { get; set; }
        public string ProdcutTags { get; set; }
        public string ProdcutPrices { get; set; }

        public string ProductName { get; set; }
        /// <summary>
        /// 1-Relavance ,2-Price Low to High,3- High to Low,4- discount
        /// </summary>
        public int OrderById { get; set; }

        public bool IsFavorite { get; set; }

    }
}