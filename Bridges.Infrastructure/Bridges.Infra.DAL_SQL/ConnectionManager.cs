using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Bridges.Infra.DAL_SQL
{
    public static class ConnectionManager
    {
        private static SqlConnection _CurrentConnection;
        public static SqlConnection GetConnection()
        {
            if (_CurrentConnection == null)
            {
                //string connectionStringVIVO = @"Data Source=STEPHANE-VIVIBO\sqlexpress;Initial Catalog=Bridges;Persist Security Info=True;User ID=Bridges;Password=bridges";
                string connectionStringDeskto = @"Data Source=STEPHANE-DESKTO\SQLEXPRESS;Initial Catalog=Bridges;Persist Security Info=True;User ID=Bridges;Password=bridges";
                //string connectionString = ConfigurationManager.ConnectionStrings["CustomerConnection"].ConnectionString)
                _CurrentConnection = new SqlConnection(connectionStringDeskto);
            }
            return _CurrentConnection;
        }
    }
}
