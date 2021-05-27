using System;
using System.Collections.Generic;
using System.Text;

namespace Hst.Model.ViewModels
{
    public class ProductCategoryListModel
    {
        public int RowNumber { get; set; }
        public int PC_Id { get; set; }
        public string MainCategoryName { get; set; }
        public bool IsActive { get; set; }
        public List<ProductChildCategoryModel> Childs { get; set; }
    }

    public class ProductChildCategoryModel
    {
        public int PCM_ParentId { get; set; }
        public int PCM_Childid { get; set; }
        public string PC_Name { get; set; }
    }
}
