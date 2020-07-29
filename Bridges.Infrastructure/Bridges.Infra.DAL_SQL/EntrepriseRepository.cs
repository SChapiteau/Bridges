using BridgeCore.Entreprise;
using Bridges.Services;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime;

namespace Bridges.Infra.DAL_SQL
{
    public class EntrepriseRepository : IEntrepriseRepository
    {
        public IEnumerable<Entreprise> GetAll()
        {
            string connectionString = @"Data Source=STEPHANE-VIVIBO\sqlexpress;Initial Catalog=Bridges;Persist Security Info=True;User ID=Bridges;Password=bridges";
            //string connectionString = ConfigurationManager.ConnectionStrings["CustomerConnection"].ConnectionString)

            using (IDbConnection db = new SqlConnection(connectionString))
            {
                return db.Query<Entreprise>("Select * From Entreprise").ToList();
            }
        }
    }
}
