using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Product
{
   public class PaymentDetail
    {
        public int ID { get; set; }
        public int? SO_OrderID { get; set; }
        public int? CreditCardID { get; set; }
        public string LastCardDigit { get; set; }
        public decimal? AuthorizeAmt { get; set; }
        public decimal? SettledAmount { get; set; }
        public int? StatusID { get; set; }
        public string AuthorizeCode { get; set; }
        public string ResponseCode { get; set; }
        public string TransactionID { get; set; }
        public string ResponseMsg { get; set; }
        public bool AuthStatus { get; set; }
        public string TransactionCode { get; set; }
        public bool IsPaymentReceived { get; set; }
        public DateTime? ProcessedDate { get; set; }
        public DateTime? ReauthorizationDate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public int PaymentMethodID { get; set; }
        public int PaymentSourceId { get; set; }
        public int PaymentGatewayId { get; set; }
    }
}
