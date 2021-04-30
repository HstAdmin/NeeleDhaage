using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Neeledhaage.Models.Product
{
    [DataContract]
    public class ProductVM
    {

        [DataMember(Name = "ProductId")]
        public int P_ID { get; set; }
        [DataMember(Name = "CategoryId")]
        public int P_PC_id { get; set; }
        [DataMember(Name = "BrandId")]
        public int P_PB_Id { get; set; }
        [DataMember(Name = "ProductName")]
        public string P_Name { get; set; }
        [DataMember(Name = "ComapnyName")]
        public string P_CompanyName { get; set; }
        [DataMember(Name = "Rating")]
        public string P_Rating { get; set; }
        [DataMember(Name = "Description")]
        public string P_Description { get; set; }
        [DataMember(Name = "Varients")]
        public List<ProductVarientVM> Varients { get; set; }
    }

    [DataContract]
    public class ProductVarientVM
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
        [DataMember(Name = "P_Description")]
        public string P_Description { get; set; }
        [DataMember(Name = "Heighlights")]
        public string P_Heighlights { get; set; }
        [DataMember(Name = "MRP")]
        public decimal MRP { get; set; }
        [DataMember(Name = "SalesPrice")]
        public decimal SalesPrice { get; set; }
        [DataMember(Name = "DiscountPercentage")]
        public decimal DiscountPercentage { get; set; }

        [DataMember(Name = "PS_Name")]
        public string PS_Name { get; set; }

        [DataMember(Name = "ProductTypeName")]
        public string PT_Name { get; set; }

        [DataMember(Name = "ParentId")]
        public int ParentId { get; set; }

        [DataMember(Name = "CartQty")]
        public int CartQty { get; set; }

        [DataMember(Name = "ProductImages")]
        public IList<ProductImagesVM> productImages { get; set; }
    }

    [DataContract]
    public class ProductImagesVM
    {
        [DataMember(Name = "ProductId")]
        public int ProductId { get; set; }
        [DataMember(Name = "VariantId")]
        public int VariantId { get; set; }
        [DataMember(Name = "ImageId")]
        public int ImageId { get; set; }
        [DataMember(Name = "ImagePath")]
        public string ImagePath { get; set; }
    }
}