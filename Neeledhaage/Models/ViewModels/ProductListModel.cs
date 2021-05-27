using System;
using System.Collections.Generic;
using System.Text;

namespace Hst.Model.ViewModels
{
    public class ProductListModel
    {
        public int RowNumber { get; set; }
        public int P_ID { get; set; }
        public int P_PC_id { get; set; }
        public int PV_ID { get; set; }
        public string P_Name { get; set; }
        public bool P_IsActive { get; set; }
        public string PC_Name { get; set; }
        public string PS_Name { get; set; }
        public int PV_PS_Id { get; set; }
        public decimal PV_MRP { get; set; }
        public decimal PV_DiscountPercentage { get; set; }
        public string U_Name { get; set; }
        public string P_Heighlights { get; set; }
    }
}
