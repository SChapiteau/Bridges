using BridgeCore.Entreprise;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridges.Services
{
    public class Annuaire
    {
       public IEnumerable<Entreprise> GetAll()
        {
            //Faire appel a un IEnterpriseRepository
            IEnumerable<Entreprise> result = new List<Entreprise>
            {
                new Entreprise{SIRET = "123", Nom="Entreprise 1"},
                new Entreprise{SIRET = "222", Nom="Entreprise 2"},
                new Entreprise{SIRET = "333", Nom="Entreprise 3"}
            };

            return result;
        }
    }
}
