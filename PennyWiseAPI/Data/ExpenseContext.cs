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

        // Optionally, you can configure other model relationships or settings here
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Expense>().ToTable("Expenses");
        }
    }
}
