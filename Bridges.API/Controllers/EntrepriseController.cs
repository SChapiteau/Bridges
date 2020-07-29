using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BridgeCore.Entreprise;
using Bridges.Infra.DAL_SQL;
using Bridges.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BridgeFront.Controllers
{
    [Route("api/[controller]")]
    public class EntrepriseController : Controller
    {
        [HttpGet]
        [Route("GetEntreprise")]
        public IEnumerable<Entreprise> GetEntreprise()
        {
            //Faire appel a une API
            Annuaire annuaire = new Annuaire(new EntrepriseRepository()); // faire l'injection de depéndance
            return annuaire.GetAll();

        }
    }
}