using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;


namespace Neeledhaage.Models.ViewModels
{
    public class MainProdCateModel
    {
        public int ID { get; set; }
        public int PC_ID { get; set; }
        public string PC_NAME { get; set; }
        public bool IsParent { get; set; }
        public string PC_ImagePath { get; set; }
        public int ParentId { get; set; }
    }
}
