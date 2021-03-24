const { Client } = require('pg')

// A modifier en fonction de votre setup local
// NE JAMAIS PUSH CE FICHIER
const db = new Client({
    user: "postgres",
    password: "xjj13768316112",
    host: "localhost",
    port: "5432",
    database: "FDJ",
})

db.connect()

module.exports = db