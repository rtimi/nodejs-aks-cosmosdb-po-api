let config = {}

config.host = process.env.HOST || "https://timicosmo.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "OQfYc4BYJ5QcOOzumu3essAThOYV3mzz1nrD2MY60TB8mYaj3n4CZghYLf92m57nB0rhi7TkaTmRck06jXbJ5A==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
