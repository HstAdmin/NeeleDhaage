using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
    public class OrderDetailViewModel
    {
        public int OrderID { get; set; }
        public string OrderCode { get; set; }
        public double TotalAmt { get; set; }
        public double TotalGrossAmount { get; set; }
        public double DiscountAmt { get; set; }
        public int AddressID { get; set; }
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public string OrderNote { get; set; }
        public DateTime OrderDate { get; set; }
        public int OrderStatusID { get; set; }
        public int DriverID { get; set; }
        public string DriverName { get; set; }
        public string DriverAddress { get; set; }
        public string DriverPhoneNo { get; set; }
        public List<OrderDetailItemsViewModel> Items { get; set; }

        public string CustomerLatitude { get; set; }
        public string CustomerLongitude { get; set; }
        public string DriverLatitude { get; set; }
        public string DriverLongitude { get; set; }
        public string SourceLatitude { get; set; }
        public string SourceLongitude { get; set; }
        public string CustomerPhone { get; set; }
        public string DriverImage { get; set; }
        
        public DateTime? OrderCreatedDate { get; set; }
        public DateTime? PaymentDate { get; set; }
        public DateTime? OnDeliveryDate { get; set; }
        public DateTime? OrderDeliveryDate { get; set; }

        public string CustomerMobile { get; set; }
        public string ExprectedDeliveryTime { get; set; }
        public string QrCode { get; set; }
    }

    public class OrderDetailItemsViewModel
    {
        public int ItemID { get; set; }
        public int ProductID { get; set; }
        public string ItemName { get; set; }
        public int Quantity { get; set; }
        public double UnitPrice { get; set; }
        public double TotalPrice { get; set; }

        public int Rating { get; set; }
        public int TotalReviews { get; set; }
        public string ItemImage { get; set; }
        public int ParentId { get; set; }
        public int ProductTypeId { get; set; }

        public List<OrderDetailItemsViewModel> Ingradients { get; set; }
        public List<OrderDetailItemsViewModel> Extra { get; set; }        

    }

}
