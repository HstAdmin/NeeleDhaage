//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Neeledhaage.Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Tbl_Customers
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Tbl_Customers()
        {
            this.Tbl_Customer_Address = new HashSet<Tbl_Customer_Address>();
        }
    
        public int C_CustomerID { get; set; }
        public string C_CustomerCode { get; set; }
        public string C_Title { get; set; }
        public string C_FirstName { get; set; }
        public string C_LastName { get; set; }
        public int C_StatusID { get; set; }
        public string C_EmailID { get; set; }
        public string C_Pin { get; set; }
        public string C_HomePhone { get; set; }
        public string C_MobilePhone { get; set; }
        public string C_DirectPhone { get; set; }
        public Nullable<bool> C_IsLocked { get; set; }
        public Nullable<System.DateTime> C_LockedDateTime { get; set; }
        public Nullable<int> C_PersonalAgentID { get; set; }
        public Nullable<int> C_BlockedReasonID { get; set; }
        public Nullable<int> C_CableProviderID { get; set; }
        public int C_CreatedBy { get; set; }
        public System.DateTime C_CreatedDate { get; set; }
        public Nullable<System.DateTime> C_UpdatedDate { get; set; }
        public Nullable<int> C_UpdatedBy { get; set; }
        public Nullable<byte> C_CT_CustomerTypeID { get; set; }
    
        public virtual Mst_Customer_Type Mst_Customer_Type { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tbl_Customer_Address> Tbl_Customer_Address { get; set; }
    }
}
