using BridgeCore.Entreprise;
using System.Collections.Generic;

namespace Bridges.Services
{
    public class Annuaire
    {
        private readonly IEntrepriseRepository enterpriseRepository;

        public Annuaire(IEntrepriseRepository enterpriseRepository)
        {
            this.enterpriseRepository = enterpriseRepository;
        }
       public IEnumerable<Entreprise> GetAll()
        {
            //IEnumerable<Entreprise> result = new List<Entreprise>
            //{
            //    new Entreprise{SIRET = "123", Nom="Entreprise 1"},
            //    new Entreprise{SIRET = "222", Nom="Entreprise 2"},
            //    new Entreprise{SIRET = "333", Nom="Entreprise 3"}
            //};
            //return result;

            return enterpriseRepository.GetAll();

        }
    }
}
