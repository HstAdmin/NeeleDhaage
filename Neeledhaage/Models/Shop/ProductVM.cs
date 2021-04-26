using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Neeledhaage.Dal;

namespace Neeledhaage.Models.Shop
{
    public class ProductVM
    {
        public ProductVM(Tbl_Inventory_Products products)
        {
            Id = products.IP_ProductID;
            Name = products.IP_ProductName;
            Slug = products.IP_ProductName;
            Description = products.IP_ProductName;
            Price = Convert.ToDecimal(products.IP_TargetPrice);
            CategoryName = products.IP_ProductName;
            CategoryId = Convert.ToInt32(products.IP_IC_CategoryID);
            ImageName = products.IP_ImageName;
            Sku = products.IP_SKU;
            Imagepath = products.IP_ImagePath;
        }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Slug { get; set; }
        [Required]
        public string Description { get; set; }
        public string Sku { get; set; }
        public decimal Price { get; set; }
        public string CategoryName { get; set; }
        [Required]
        public int CategoryId { get; set; }
        public string ImageName { get; set; }

        public string Imagepath { get; set; }

        public IEnumerable<SelectListItem> Categories { get; set; }
        public IEnumerable<string> GalleryImages { get; set; }
    }
}