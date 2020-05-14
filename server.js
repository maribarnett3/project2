const dbConfig = require("./config/connectDB");

console.log(dbConfig.local);

mysql.connection(dbConfig.local)