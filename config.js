let config = {}

config.host = process.env.HOST || "https://timicosmo.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "Z5DSIwwxkuKaULVOCmQlTtTDXg4nC0LcJA1YvjoxRgISDQDTq7LqyooEL4aTv9irb6jQuHB2BJmhkUJeh1OILA==";
config.databaseId = "OrderDB";
config.collectionId = "PurchaseOrders";

module.exports = config;
