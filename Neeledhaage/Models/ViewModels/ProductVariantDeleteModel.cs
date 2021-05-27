using System;
using System.Collections.Generic;
using System.Text;

namespace Hst.Model.ViewModels
{
    public class ProductVariantDeleteModel
    {
        public int PVId { get; set; }
        public int CreatedBy { get; set; }

        public bool Success { get; set; }
        public string ReturnMessage { get; set; }
    }
}
