const { Client } = require('pg')

// A modifier en fonction de votre setup local
// NE JAMAIS PUSH CE FICHIER
const db = new Client({
    user: "postgres",
    password: "admin123",
    host: "localhost",
    port: "5430",
    database: "AWI",
})

db.connect()

module.exports = db