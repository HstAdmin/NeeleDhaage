using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Neeledhaage.Models.Pages
{
    public class SidebarVM
    {
        public int Id { get; set; }
        [AllowHtml]
        public string Body { get; set; }
    }
}