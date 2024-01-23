
const mongoose = require("mongoose")

const ProductModel = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model("product",ProductModel)

module.exports = Product