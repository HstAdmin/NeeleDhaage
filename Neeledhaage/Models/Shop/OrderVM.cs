using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Shop
{
    public class OrderVM
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}