namespace PennyWiseAPI.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        // Additional properties, if needed
        public string Category { get; set; } = string.Empty;
        public bool IsRecurring { get; set; }
    }
}
