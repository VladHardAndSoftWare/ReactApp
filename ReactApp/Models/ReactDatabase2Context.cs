using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ReactApp.Models;

public partial class ReactDatabase2Context : DbContext
{
    public ReactDatabase2Context()
    {
    }

    public ReactDatabase2Context(DbContextOptions<ReactDatabase2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Order> Orders { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-QED4647\\SQLEXPRESS;Initial Catalog=ReactDatabase2;Integrated Security=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.IdOrder).HasName("PK_Class");

            entity.ToTable("Order");

            entity.Property(e => e.IdOrder).HasColumnName("ID_order");
            entity.Property(e => e.RecipientAdress)
                .HasMaxLength(250)
                .HasColumnName("Recipient_adress");
            entity.Property(e => e.RecipientCity)
                .HasMaxLength(250)
                .HasColumnName("Recipient_city");
            entity.Property(e => e.SenderAdress)
                .HasMaxLength(250)
                .HasColumnName("Sender_adress");
            entity.Property(e => e.SenderCity)
                .HasMaxLength(100)
                .HasColumnName("Sender_city");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
