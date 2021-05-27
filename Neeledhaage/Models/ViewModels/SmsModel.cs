using System;
using System.Collections.Generic;
using System.Text;

namespace Hst.Model.ViewModels
{
    public class SmsModel
    {
        public string Mobile { get; set; }
        public string Message { get; set; }
        public string MessageId { get; set; }
        public int Status { get; set; }
    }
}
