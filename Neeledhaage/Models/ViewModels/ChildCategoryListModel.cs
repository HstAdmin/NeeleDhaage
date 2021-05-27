using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
    public class ChildCategoryListModel
    {
        public int RowNumber { get; set; }
        public int PC_Id { get; set; }
        public string CategoryName { get; set; }
        public string MainCategoryName { get; set; }
        public bool AllowExtra { get; set; }
        public bool AllowDiffSizes { get; set; }
        public bool IsActive { get; set; }
        public string ImagePath { get; set; }
    }
}
