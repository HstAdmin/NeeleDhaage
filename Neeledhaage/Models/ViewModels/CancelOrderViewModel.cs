using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
   public class CancelOrderViewModel
    {
            public int CO_ID { get; set; }
            public int CO_SO_OrderID { get; set; }
            public string CO_CancelReason { get; set; }
            public int CO_CancelReasonId { get; set; }
            public DateTime? CO_CancelDate { get; set; }
            public int CO_CancelBy { get; set; }
            public DateTime? CO_CreatedDate { get; set; }
            public int CO_CreatedBy { get; set; }
            public DateTime? CO_UpdatedDate { get; set; }
            public int CO_UpdatedBy { get; set; }
    }
}
