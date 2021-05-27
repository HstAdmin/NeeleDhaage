using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Product
{
    public class ProductImagesModel
    {
        public int ProductId { get; set; }
        public int VariantId { get; set; }
        public int ImageId { get; set; }
        public string ImagePath { get; set; }
    }
    public class ProductModel
    {
        public int P_ID { get; set; }
        public int P_PC_id { get; set; }
        public int P_PB_Id { get; set; }
        public string P_Name { get; set; }
        public string P_CompanyName { get; set; }
        public string P_Rating { get; set; }
        public string P_Description { get; set; }
        public List<ProductVarientModel> Varients { get; set; }

        public string P_Heighlights { get; set; }
        public string P_ShippingInfo { get; set; }
        public string P_ReturnInfo { get; set; }
    }
    public class ProductVarientModel
    {
        public int Id { get; set; }
        public int VariantId { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public string P_Description { get; set; }
        public string P_Heighlights { get; set; }
        public Nullable<decimal> MRP { get; set; }
        public Nullable<decimal> SalesPrice { get; set; }
        public Nullable<decimal> DiscountPercentage { get; set; }
        public string PS_Name { get; set; }
        public string PT_Name { get; set; }
        public int ParentId { get; set; }
        public int CartQty { get; set; }
        public IList<ProductImagesModel> ProductImages { get; set; }
        public IList<ProductIngradientModel> Ingradients { get; set; }
        public IList<ProductIngradientModel> Extra { get; set; }
        public string PV_Description { get; set; }
        public string PV_Pattern { get; set; }
        public string PV_Measurement { get; set; }
        public string PV_WashCare { get; set; }
        public string PV_SKUCode { get; set; }
        public string PV_Name { get; set; }
        public List<ProductTagModel> PV_VarientFabricTags { get; set; }
        public List<ProductTagModel> PV_VarientCraftTags { get; set; }
        public List<ProductTagModel> PV_VarientColorTags { get; set; }

    }

    public class ProductTagModel
    {
        public int PT_ID { get; set; }
        public int PT_TT_Id { get; set; }
        public string T_Name { get; set; }
        public int PT_PV_Id { get; set; }
    }

    public class ProductIngradientModel
    {
        public int PV_P_id { get; set; }
        public int PV_ID { get; set; }
        public int I_TypeId { get; set; }
        public int Id_ID { get; set; }
        public string I_Name { get; set; }
        public string I_Code { get; set; }
        public decimal Id_Price { get; set; }
        public int Id_U_ID { get; set; }
        public string U_Name { get; set; }
        public int Id_IS_ID { get; set; }
        public string PS_Name { get; set; }

    }

    public class ProductList
    {
        public int Id { get; set; }
        public int VariantId { get; set; }
        public int CategoryId { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public decimal MRP { get; set; }
        public decimal SalesPrice { get; set; }
        public decimal DiscountPercentage { get; set; }
        public string ImagePath { get; set; }
        public bool IsFavorite { get; set; }
    }
    public class ProductBaseModel
    {
        public IEnumerable<ProductList> productLists { get; set; }

        public int TotalCart { get; set; }
    }
    public class CartModel
    {
        public int CustomerId { get; set; }
        public int VarientId { get; set; }
        public string ErrorMessage { get; set; }
        public bool SaveSatus { get; set; }

    }
    public class CartVarientModel
    {
        public int Id { get; set; }
        public int VariantId { get; set; }
        public int CategoryId { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public string P_Description { get; set; }
        public string P_Heighlights { get; set; }
        public decimal MRP { get; set; }
        public decimal SalesPrice { get; set; }
        public decimal DiscountPercentage { get; set; }
        public int Variant_Rank { get; set; }
        public int CartQty { get; set; }

        public List<ProductImagesModel> productImages { get; set; }
    }

}
