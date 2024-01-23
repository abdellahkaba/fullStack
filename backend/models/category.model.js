const mongoose = require("mongoose")

const CategoryModel = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
},
{
    timestamps: true
}

)

const Category = mongoose.model("category",CategoryModel)

module.exports = Category