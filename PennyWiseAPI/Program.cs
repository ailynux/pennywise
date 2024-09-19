using Microsoft.EntityFrameworkCore;
using PennyWiseAPI.Data;    // Your namespace for DbContext
using PennyWiseAPI.Models;  // Your namespace for models
using System.ComponentModel.DataAnnotations.Schema; // For [Precision] attribute

var builder = WebApplication.CreateBuilder(args);

// Add User Secrets in Development
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddUserSecrets<Program>();
}

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policyBuilder =>
    {
        policyBuilder.AllowAnyOrigin()
                     .AllowAnyMethod()
                     .AllowAnyHeader();
    });
});

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Retrieve the connection string from the environment variable (or appsettings.json if applicable)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Optional: Check if the connection string is set (for debugging purposes)
if (string.IsNullOrEmpty(connectionString))
{
    Console.WriteLine("Connection string is null or empty.");
}
else
{
    Console.WriteLine("Connection string is set.");
}

// Register DbContext with SQL Server using Entity Framework Core
builder.Services.AddDbContext<ExpenseContext>(options =>
    options.UseSqlServer(connectionString));

// Build the app
var app = builder.Build();

// Configure the HTTP request pipeline.

// Enable Swagger only in the development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS globally
app.UseCors("AllowAllOrigins");

// Disable HTTPS redirection in the development environment to prevent warnings
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

// Define your endpoints for the Expense Tracker
// Updated routes to include "/api" prefix
app.MapPost("/api/expenses", (Expense expense, ExpenseContext db) =>
{
    db.Expenses.Add(expense);
    db.SaveChanges();
    return Results.Created($"/api/expenses/{expense.Id}", expense);
}).WithName("CreateExpense");

app.MapGet("/api/expenses", (ExpenseContext db) =>
{
    return db.Expenses.ToList();
}).WithName("GetExpenses");

// Run the application
app.Run();
