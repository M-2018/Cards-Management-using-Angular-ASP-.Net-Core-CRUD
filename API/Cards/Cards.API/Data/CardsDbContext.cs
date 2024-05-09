using Cards.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Cards.API.Data
{
    public class CardsDbContext: DbContext
    {
        public CardsDbContext(DbContextOptions options) : base(options)
        {
        }

        //Dbset
        public DbSet<Card> Cards { get; set; }
    }
}
