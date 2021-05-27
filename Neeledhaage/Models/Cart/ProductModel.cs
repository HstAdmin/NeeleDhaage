using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Neeledhaage.Models.Entities;
using Neeledhaage.Models.Product;

namespace Neeledhaage.Models
{
    public class CartModel
    {
        public List<CartVarientModel> cartModel { get; set; }
    }
}