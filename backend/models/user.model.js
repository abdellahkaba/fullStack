

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const UserModel = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
   /* role: {
        type: Number,
        default: 0
    } */
}, 
{
    timestamps: true
}
)
// Crypter le mot de passe avant d'enregistrer

UserModel.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }this.password = await bcrypt.hash(this.password, 10)
})

// Verify password 
UserModel.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword,this.password)
}
const User = mongoose.model("user", UserModel)

module.exports = User