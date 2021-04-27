using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Neeledhaage.Models.Product
{
    [DataContract]
    public class ProductBaseModelVM
    {
        [DataMember(Name = "productLists")]
        public IEnumerable<ProductListResultVM> productLists { get; set; }

        [DataMember(Name = "TotalCart")]
        public int TotalCart { get; set; }
    }

    [DataContract]
    public class ProductListResultVM
    {
        [DataMember(Name = "Id")]
        public int Id { get; set; }
        [DataMember(Name = "VariantId")]
        public int VariantId { get; set; }
        [DataMember(Name = "CategoryId")]
        public int CategoryId { get; set; }
        [DataMember(Name = "ProductName")]
        public string ProductName { get; set; }
        [DataMember(Name = "CompanyName")]
        public string CompanyName { get; set; }
        [DataMember(Name = "MRP")]
        public decimal MRP { get; set; }
        [DataMember(Name = "SalesPrice")]
        public decimal SalesPrice { get; set; }
        [DataMember(Name = "DiscountPercentage")]
        public decimal DiscountPercentage { get; set; }

        [DataMember(Name = "CartQty")]
        public string CartQty { get; set; }

        [DataMember(Name = "ImagePath")]
        public string ImagePath { get; set; }

        [DataMember(Name = "IsFavorite")]
        public bool IsFavorite { get; set; }
    }
}