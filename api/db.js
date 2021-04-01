const { Pool } = require('pg')

// A modifier en fonction de votre setup local
// NE JAMAIS PUSH CE FICHIER
const db = new Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: "15432",
    database: "AWI"
})

db.connect()

module.exports = db