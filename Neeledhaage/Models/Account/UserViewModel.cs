using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Models.Account
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string UserName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Otp { get; set; }
        public bool Retry { get; set; }
        public bool Status { get; set; }
        public string Message { get; set; }
        public DateTime ExpireTime { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string ProfilePicture { get; set; }
        public string ProfilePictureBase64 { get; set; }
        public string ForgotPasswordCode { get; set; }
        public int GenderId { get; set; }
        public DateTime? DOB { get; set; }
        public string SchoolIds { get; set; }
        public int IsActive { get; set; }
        public string SocialType { get; set; }
        public string SocialId { get; set; }
        public int? UserTypeId { get; set; }
        public string ErrorMessage { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public string EmailTemplatePath { get; set; }
    }
}