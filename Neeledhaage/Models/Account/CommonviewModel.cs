using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Neeledhaage.Models.Account;

namespace Neeledhaage.Models.Account
{
    public class CommonviewModel
    {
        public UserVM UserVM { get; set; }
        public LoginUserVM LoginUserVM { get; set; }
    }
}