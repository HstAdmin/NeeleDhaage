using System;
using System.Collections.Generic;
using System.Text;

namespace Neeledhaage.Models.ViewModels
{
    public class UserListModel
    {
        public int RowNumber { get; set; }
        public int DriverId { get; set; }
        public DateTime? JoiningDate { get; set; }
        public string EmpName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string PostCode { get; set; }
        public string CityName { get; set; }
        public string StateName { get; set; }
        public int TotalDelivered { get; set; }
        public DateTime? LastLogin { get; set; }
        public int RoleId { get; set; }
        public int UserId { get; set; }
        public string Role { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }

    }
}
