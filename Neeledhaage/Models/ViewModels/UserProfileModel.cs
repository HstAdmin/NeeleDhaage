using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Neeledhaage.Models.ViewModels
{
    public class UserProfileModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Please enter first name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Please enter last name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Please enter mobile")]
        [RegularExpression(@"[6-9][0-9]{9}", ErrorMessage = "The mobile format is invalid")]
        public string Mobile { get; set; }
        [Required(ErrorMessage = "Please enter email")]

        public string Email { get; set; }
        [Required(ErrorMessage = "Please select gender")]
        public int GenderId { get; set; }
        [Required(ErrorMessage = "Please enter date of birth")]
        public string strDOB { get; set; }

        public DateTime? DOB { get; set; }

        public string UserName { get; set; }
        public string ProfilePicture { get; set; }
    }
}
