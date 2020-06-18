using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BridgeFront.Controllers
{
    [Route("api/[controller]")]
    public class EntrepriseController : Controller
    {
        [HttpGet]
        [Route("GetEntreprise")]
        public string GetEntreprise()
        {
            return @" items: [ { 'id': 1, 'Nom': 'Apples', 'SIRET': '1235132' },
                { 'id': 2, 'Nom': 'Peaches', 'SIRET': '15321' }
            ];";
        }
    }
}