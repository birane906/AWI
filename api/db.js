const { Client } = require('pg')

// A modifier en fonction de votre setup local
// NE JAMAIS PUSH CE FICHIER
const db = new Client({
    user: "postgres",
    password: "xiang1997",
    host: "localhost",
    port: "5433",
    database: "FDJ",
})

db.connect()

module.exports = db