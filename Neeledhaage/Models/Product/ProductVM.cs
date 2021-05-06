using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Neeledhaage.Models.Product
{
   // [DataContract]
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

        [DataMember(Name = "Heighlights")]
        public string P_Heighlights { get; set; }
        [DataMember(Name = "ShippingInfo")]
        public string P_ShippingInfo { get; set; }
        [DataMember(Name = "ReturnInfo")]
        public string P_ReturnInfo { get; set; }
    }

    //[DataContract]
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

        [DataMember(Name = "Description")]
        public string PV_Description { get; set; }
        [DataMember(Name = "Pattern")]
        public string PV_Pattern { get; set; }
        [DataMember(Name = "Measurement")]
        public string PV_Measurement { get; set; }
        [DataMember(Name = "WashCare")]
        public string PV_WashCare { get; set; }
        [DataMember(Name = "SKUCode")]
        public string PV_SKUCode { get; set; }
        [DataMember(Name = "Name")]
        public string PV_Name { get; set; }
        [DataMember(Name = "PV_VarientFabricTags")]
        public List<ProductTagVM> PV_VarientFabricTags { get; set; }
        [DataMember(Name = "PV_VarientCraftTags")]
        public List<ProductTagVM> PV_VarientCraftTags { get; set; }
        [DataMember(Name = "PV_VarientColorTags")]
        public List<ProductTagVM> PV_VarientColorTags { get; set; }

    }

    //[DataContract]
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

    //[DataContract]
    public class ProductTagVM
    {
        [DataMember(Name = "PT_ID")]
        public int PT_ID { get; set; }
        [DataMember(Name = "PT_TT_Id")]
        public int PT_TT_Id { get; set; }
        [DataMember(Name = "T_Name")]
        public string T_Name { get; set; }
        [DataMember(Name = "PT_PV_Id")]
        public int PT_PV_Id { get; set; }
    }
}