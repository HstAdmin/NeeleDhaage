﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class NeeledhaageEntities : DbContext
    {
        public NeeledhaageEntities()
            : base("name=NeeledhaageEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tblCategory> tblCategories { get; set; }
        public virtual DbSet<tblPage> tblPages { get; set; }
        public virtual DbSet<tblProduct> tblProducts { get; set; }
        public virtual DbSet<tblRole> tblRoles { get; set; }
        public virtual DbSet<tblSidebar> tblSidebars { get; set; }
        public virtual DbSet<tblUserRole> tblUserRoles { get; set; }
        public virtual DbSet<Mst_Customer_AddressType> Mst_Customer_AddressType { get; set; }
        public virtual DbSet<Mst_Customer_Type> Mst_Customer_Type { get; set; }
        public virtual DbSet<Mst_Inventory_ProductType> Mst_Inventory_ProductType { get; set; }
        public virtual DbSet<System_MstCountry> System_MstCountry { get; set; }
        public virtual DbSet<System_MstState> System_MstState { get; set; }
        public virtual DbSet<System_MstStatus> System_MstStatus { get; set; }
        public virtual DbSet<Tbl_Customer_Address> Tbl_Customer_Address { get; set; }
        public virtual DbSet<Tbl_Customers> Tbl_Customers { get; set; }
        public virtual DbSet<Tbl_ExceptionLogger> Tbl_ExceptionLogger { get; set; }
        public virtual DbSet<Tbl_Inventory_CategoryType> Tbl_Inventory_CategoryType { get; set; }
        public virtual DbSet<Tbl_Inventory_ProductCategories> Tbl_Inventory_ProductCategories { get; set; }
        public virtual DbSet<Tbl_Sales_OrderItems> Tbl_Sales_OrderItems { get; set; }
        public virtual DbSet<Tbl_Sales_Orders> Tbl_Sales_Orders { get; set; }
        public virtual DbSet<Tbl_Inventory_Category> Tbl_Inventory_Category { get; set; }
        public virtual DbSet<Tbl_Inventory_Products> Tbl_Inventory_Products { get; set; }
        public virtual DbSet<tblUser> tblUsers { get; set; }
        public virtual DbSet<tblOrderDetail> tblOrderDetails { get; set; }
        public virtual DbSet<tblOrder> tblOrders { get; set; }
    }
}
