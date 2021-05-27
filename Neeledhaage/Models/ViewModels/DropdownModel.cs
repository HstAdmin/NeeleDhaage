using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
    public class DropdownModel
    {
        public string Value { get; set; }
        public string Text { get; set; }
        public string Parent { get; set; }
        public bool IsChecked { get; set; }
        public int? ParentId { get; set; }
    }
}
