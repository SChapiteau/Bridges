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
        readonly IAnnuaire annuaire;

        public EntrepriseController(IAnnuaire annuaire)
        {
            this.annuaire = annuaire;
        }

        [HttpGet]
        [Route("GetEntreprise")]
        public IEnumerable<Entreprise> GetEntreprise()
        {
            return this.annuaire.GetAll();
        }
    }
}