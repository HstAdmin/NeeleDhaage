using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Hst.Model.ViewModels
{
    [DataContract]
    public class ProductViewModel
    {
        [DataMember(Name = "Id")]
        public int PhaD_ID { get; set; }
    }

    [DataContract]
    public class ProductCategoryVM
    {

        public int ID { get; set; }
        [DataMember(Name = "Id")]
        public int PC_ID { get; set; }
        [DataMember(Name = "Name")]
        public string PC_NAME { get; set; }

        [DataMember(Name = "IsParent")]
        public bool IsParent { get; set; }

        [DataMember(Name = "ImagePath")]
        public string PC_ImagePath { get; set; }
    }


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

    [DataContract]
    public class ProductBaseModelVM
    {
        [DataMember(Name = "productLists")]
        public IEnumerable<ProductListResultVM> productLists { get; set; }

        [DataMember(Name = "TotalCart")]
        public int TotalCart { get; set; }
    }
    //[DataContract]
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
        [DataMember(Name = "Description")]
        public string P_Description { get; set; }
        [DataMember(Name = "Heighlights")]
        public string P_Heighlights { get; set; }
        [DataMember(Name = "MRP")]
        public decimal MRP { get; set; }
        [DataMember(Name = "SalesPrice")]
        public decimal SalesPrice { get; set; }
        [DataMember(Name = "DiscountPercentage")]
        public decimal DiscountPercentage { get; set; }

        [DataMember(Name = "ProductSizeName")]
        public string PS_Name { get; set; }

        [DataMember(Name = "ProductTypeName")]
        public string PT_Name { get; set; }

        [DataMember(Name = "ParentId")]
        public int ParentId { get; set; }

        [DataMember(Name = "CartQty")]
        public int CartQty { get; set; }

        [DataMember(Name = "ProductImages")]
        public IList<ProductImagesVM> productImages { get; set; }
        [DataMember(Name = "ProductIngradient")]
        public IList<ProductIngradientVM> Ingradients { get; set; }
        [DataMember(Name = "ProductExtra")]
        public IList<ProductIngradientVM> Extra { get; set; }

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
    public class ProductIngradientVM
    {
        [DataMember(Name = "ProductId")]
        public int PV_P_id { get; set; }
        [DataMember(Name = "VarientId")]
        public int PV_ID { get; set; }
        [DataMember(Name = "TypeId")]
        public int I_TypeId { get; set; }
        [DataMember(Name = "DetailId")]
        public int Id_ID { get; set; }
        [DataMember(Name = "tName")]
        public string I_Name { get; set; }
        [DataMember(Name = "Code")]
        public string I_Code { get; set; }
        [DataMember(Name = "Price")]
        public decimal Id_Price { get; set; }
        [DataMember(Name = "UnitId")]
        public int Id_U_ID { get; set; }
        [DataMember(Name = "UnitName")]
        public string U_Name { get; set; }
        [DataMember(Name = "SizeId")]
        public int Id_IS_ID { get; set; }
        [DataMember(Name = "SizeName")]
        public string PS_Name { get; set; }

    }
}
