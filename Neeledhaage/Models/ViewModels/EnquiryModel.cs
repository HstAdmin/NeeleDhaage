using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Neeledhaage.Models.ViewModels
{
    public class EnquiryModel
    {
        public int? Id { get; set; }

        [Required(ErrorMessage = "Please enter name")]
        public string ParentName { get; set; }

        [Required(ErrorMessage = "Please enter mobile")]
        [RegularExpression(@"[6-9][0-9]{9}", ErrorMessage = "The mobile format is invalid")]
        public string ParentMobile { get; set; }

        [Required(ErrorMessage = "Please enter email")]
        public string ParentEmail { get; set; }

        [Required(ErrorMessage = "Please enter name")]
        public string StudentName { get; set; }

        public int? StudentAge { get; set; }

        [Required(ErrorMessage = "Please enter class")]
        public string StudentClass { get; set; }

        public int EnquiryTypeId { get; set; }

        [Required(ErrorMessage = "Please enter message")]
        public string Description { get; set; }

        public string ParentOccupation { get; set; }
        public string ParentCity { get; set; }

        [Required(ErrorMessage = "Please select class")]
        [Range(1, int.MaxValue, ErrorMessage = "Please select class")]
        public int? StudentClassId { get; set; }

        public int? SchoolId { get; set; }

        public List<DropdownModel> ClassList { get; set; }

        public string Status { get; set; }
        public string SchoolName { get; set; }
        public string ViewTime { get; set; }

        [Required(ErrorMessage = "Please enter subject")]
        public string Subject { get; set; }
    }
}
