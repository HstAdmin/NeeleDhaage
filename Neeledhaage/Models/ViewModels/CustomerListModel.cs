using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
    public class CustomerListModel
    {
        public int RowNumber { get; set; }
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }

    }
}
