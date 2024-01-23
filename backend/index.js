const express = require("express")
const DbConnect = require("./config/db.js")

const app = express()

const port = 5000
//Appel de la connexion à la base de données

DbConnect()

// utiliser le middlewrare cors

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", require("./routes/route.routes.js"))

app.listen(port, () => console.log("Le serveur a demarree !"))