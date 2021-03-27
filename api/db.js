const { Pool } = require('pg')

// A modifier en fonction de votre setup local
// NE JAMAIS PUSH CE FICHIER
const db = new Pool({
    user: "fjm",
    password: "admin",
    host: "localhost",
    port: "5433",
    database: "FDJ"
})

db.connect()

module.exports = db