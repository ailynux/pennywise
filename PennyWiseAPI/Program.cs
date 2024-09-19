using Microsoft.EntityFrameworkCore;
using PennyWiseAPI.Data;  // Your namespace for DbContext
using PennyWiseAPI.Models;  // Your namespace for models

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Retrieve the connection string from the environment variable (or appsettings.json if applicable)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Print the connection string to the console (for debugging)
Console.WriteLine($"Connection String: {connectionString}");

// Register DbContext with SQL Server using Entity Framework Core
builder.Services.AddDbContext<ExpenseContext>(options =>
    options.UseSqlServer(connectionString));

// Build the app
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS globally
app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();

// Define your endpoints for the Expense Tracker
app.MapPost("/expenses", (Expense expense, ExpenseContext db) =>
{
    db.Expenses.Add(expense);
    db.SaveChanges();
    return Results.Created($"/expenses/{expense.Id}", expense);
}).WithName("CreateExpense");

app.MapGet("/expenses", (ExpenseContext db) =>
{
    return db.Expenses.ToList();
}).WithName("GetExpenses");

app.Run();
