using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Neeledhaage.Common
{
    public static class SessionManager
    {
        public static string UserFullName
        {
            get
            {
                return HttpContext.Current != null && HttpContext.Current.User != null ? HttpContext.Current.User.Identity.Name : string.Empty;
            }
        }

        public static int UserId { get; set; }

    }
}