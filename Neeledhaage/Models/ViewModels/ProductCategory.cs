using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text;

namespace Hst.Model.ViewModels
{
    [Serializable]
    public class ProductCategory
    {
        [DataMember(Name = "Id")]
        public int PC_ID { get; set; }
        [DataMember(Name = "Name")]
        [Required(ErrorMessage = "Name is required")]
        public string PC_Name { get; set; }
        [DataMember(Name = "ProjectId")]
        public int PC_Projectid { get; set; }
        [DataMember(Name = "IsActive")]
        public bool PC_IsActive { get; set; }
        [DataMember(Name = "IsDelete")]
        public bool PC_IsDelete { get; set; }
        [DataMember(Name = "CreatedDate")]
        public DateTime? PC_CreatedDate { get; set; }
        [DataMember(Name = "CreatedBy")]
        public int PC_CreatedBy { get; set; }
        [DataMember(Name = "UpdatedDate")]
        public DateTime? PC_UpdatedDate { get; set; }
        [DataMember(Name = "UpdatedBy")]
        public int PC_UpdatedBy { get; set; }
        [DataMember(Name = "ImagePath")]
        public string PC_ImagePath { get; set; }
        [DataMember(Name = "AllowExtra")]
        public bool PC_AllowExtra { get; set; }
        [DataMember(Name = "AllowDiffSizes")]
        public bool PC_AllowDiffSizes { get; set; }
        [DataMember(Name = "ParentId")]
        public int PCM_ParentId { get; set; }
        [DataMember(Name = "OldParentId")]
        public int PC_OldParentId { get; set; }

        public int ClientId { get; set; }
        public List<ProductCategoryListModel> ParentCategoryList { get; set; }

        //public IFormFile ImageFile { get; set; }
    }

    public class GetProductCategoryResult
    {
        public int ID { get; set; }
        public Nullable<int> PC_ID { get; set; }
        public string PC_NAME { get; set; }
        public Nullable<bool> IsParent { get; set; }
        public string PC_ImagePath { get; set; }
        public int ParentId { get; set; }
    }
    public class GetProductCategoryVM
    {
        public int ID { get; set; }
        public Nullable<int> PC_ID { get; set; }
        public string PC_NAME { get; set; }        
        public string PC_ImagePath { get; set; }
        public List<GetProductCategoryVM> SubCategory { get; set; }
    }
}
