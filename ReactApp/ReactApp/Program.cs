using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using ReactApp.Models;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ReactDatabase2Context>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


//app.UseAuthorization();
//app.Environment.EnvironmentName = "Production";

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseStaticFiles();
app.UseRouting();

//app

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
