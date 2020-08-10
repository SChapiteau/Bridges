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
            

            using (IDbConnection db = ConnectionManager.GetConnection())
            {
                return db.Query<Entreprise>("Select * From Entreprise").ToList();
            }
        }
    }
}
