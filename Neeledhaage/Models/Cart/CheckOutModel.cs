using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Cart
{
    public class CheckOutModel
    {
      
        public string key { get; set; }
        public string RazorOrderID { get; set; }
        public string CustomerName { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public decimal OrderAmount { get; set; }
        public string OrderCode { get; set; }

        public string Description { get; set; }

        public string Imagepath { get; set; }

        public bool IsOrdercrated { get; set; }
        public decimal RazorPayOrderAmount { get; set; }
    }
}