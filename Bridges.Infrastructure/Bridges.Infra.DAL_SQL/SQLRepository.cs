using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Bridges.Infra.DAL_SQL
{
    public class SQLRepository
    {
        private IConfiguration _configuration;

        public SQLRepository(IConfiguration iconfig)
        {
            _configuration = iconfig;
        }

        private static SqlConnection _currentConnection;
        
        public SqlConnection CurrentConnection
        {
            get {
                if (_currentConnection == null)
                {
                    var connectionString = _configuration["ConnectionString"];
                    //string connectionStringVIVO = @"Data Source=STEPHANE-VIVIBO\sqlexpress;Initial Catalog=Bridges;Persist Security Info=True;User ID=Bridges;Password=bridges";
                    string connectionStringDeskto = @"Data Source=STEPHANE-DESKTO\SQLEXPRESS;Initial Catalog=Bridges;Persist Security Info=True;User ID=Bridges;Password=bridges";
                    //string connectionString = ConfigurationManager.ConnectionStrings["CustomerConnection"].ConnectionString)
                    _currentConnection = new SqlConnection(connectionString);
                }
                return _currentConnection;
            }
        }
    }
}
