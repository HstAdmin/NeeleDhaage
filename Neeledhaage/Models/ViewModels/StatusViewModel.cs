using System;
using System.Collections.Generic;
using System.Text;

namespace Neeledhaage.Models.ViewModels
{
    public class StatusViewModel
    {
		public int StatusID { get; set; }
		public string StatusType { get; set; }
		public string Code { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool IsActive { get; set; }
		public DateTime? CreatedDate { get; set; }
		public int CreatedBy { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public int UpdatedBy { get; set; }
	}
}
