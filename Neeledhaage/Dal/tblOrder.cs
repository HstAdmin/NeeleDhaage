//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Neeledhaage.Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblOrder
    {
        public int OrderId { get; set; }
        public string OrderCode { get; set; }
        public Nullable<int> UserId { get; set; }
        public string RazorPayOrderId { get; set; }
        public Nullable<decimal> TotalOrderAmount { get; set; }
        public string RazorStatus { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
    }
}
