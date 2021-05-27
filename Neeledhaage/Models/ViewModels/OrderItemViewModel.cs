using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace  Neeledhaage.Models.ViewModels
{
    [DataContract]
    public class OrderItemViewModel
    {
        [DataMember(Name = "OrderItemID")]
        public int SOI_OrderItemID { get; set; }
        [DataMember(Name = "OrderID")]
        public int SOI_SO_OrderID { get; set; }
        [DataMember(Name = "ProductID")]
        public int? SOI_IP_ProductID { get; set; }
        [DataMember(Name = "SKU")]
        public string SOI_SKU { get; set; }
        [DataMember(Name = "Price")]
        public decimal SOI_Price { get; set; }
        [DataMember(Name = "Qty")]
        public int SOI_Qty { get; set; }
        [DataMember(Name = "TaxRate")]
        public decimal? SOI_TaxRate { get; set; }
        [DataMember(Name = "TaxAmount")]
        public decimal SOI_TaxAmount { get; set; }
        [DataMember(Name = "Discount")]
        public decimal? SOI_DiscountAmt { get; set; }
        [DataMember(Name = "TotalNetAmt")]
        public decimal SOI_TotalNetAmt { get; set; }
        [DataMember(Name = "IsReserved")]
        public bool SOI_IsReserved { get; set; }
        [DataMember(Name = "ShippingAmt")]
        public decimal? SOI_ShippingAmt { get; set; }
        public DateTime? SOI_CreatedDate { get; set; }
        public int? SOI_CreatedBy { get; set; }
        public DateTime? SOI_UpdatedDate { get; set; }
        public int? SOI_UpdatedBy { get; set; }
        public DateTime? SOI_TimeStamp { get; set; }
    }
}
