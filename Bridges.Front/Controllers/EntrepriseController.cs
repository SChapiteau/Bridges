using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using BridgeCore.Entreprise;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BridgeFront.Controllers
{
    [Route("api/[controller]")]
    public class EntrepriseController : Controller
    {
        [HttpGet]
        [Route("GetEntreprise")]
        public async Task<IEnumerable<Entreprise>> GetEntreprise()
        {            
            var client = new HttpClient();
            IEnumerable<Entreprise> entreprises = null;

            client.BaseAddress = new Uri("https://localhost:44378/");
            HttpResponseMessage response = await client.GetAsync("api/Entreprise/GetEntreprise");
            if (response.IsSuccessStatusCode)
            {
                entreprises = await response.Content.ReadAsAsync<IEnumerable<Entreprise>>();
            }
            return entreprises;
        }
    }
}