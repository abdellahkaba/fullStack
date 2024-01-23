const mongoose = require("mongoose")

const DbConnect = async () => {

    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect("mongodb+srv://abdellah:Kaba987k@cluster0.gyjh5xk.mongodb.net/mongo").then(() => console.log("connexion reussi !"))
    } catch (err) {
        console.log(err)
        process.exit()
    }
}


module.exports = DbConnect