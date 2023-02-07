using System;
using System.Collections.Generic;

namespace ReactApp.Models;

public partial class Order
{
    public int IdOrder { get; set; }

    public string SenderCity { get; set; } = null!;

    public string SenderAdress { get; set; } = null!;

    public string RecipientCity { get; set; } = null!;

    public string RecipientAdress { get; set; } = null!;

    public int Weight { get; set; }

    public DateTime OrderDate { get; set; }
}
