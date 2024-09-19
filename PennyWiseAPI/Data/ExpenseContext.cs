using Microsoft.EntityFrameworkCore;
using PennyWiseAPI.Models;

namespace PennyWiseAPI.Data
{
    public class ExpenseContext : DbContext
    {
        public ExpenseContext(DbContextOptions<ExpenseContext> options)
            : base(options)
        {
        }

        public DbSet<Expense> Expenses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Expense>(entity =>
            {
                entity.ToTable("Expenses");

                // Specify precision and scale for Amount
                entity.Property(e => e.Amount)
                      .HasColumnType("decimal(18,2)");

                // Configure other properties if needed
            });
        }
    }
}
