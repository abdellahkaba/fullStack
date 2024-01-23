

const mongoose = require("mongoose")

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
    }
}, 
{
    timestamps: true
}
)

const User = mongoose.model("user", UserModel)

module.exports = User