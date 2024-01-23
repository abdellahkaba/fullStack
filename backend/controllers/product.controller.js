const Product = require("../models/product.model")


//fonction d'insertion
module.exports.setProducts = async (req,res) => {
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        category_id: req.body.category_id
    })

    res.status(200).json(product)
}
//fonction de getAll

module.exports.getAllProducts = async (req,res) => {
    
    try {
        const productAll = await Product.find({})
        res.status(200).json(productAll)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

//fonction de getOne Product

module.exports.getOneProduct = async (req,res) => {

    try {
        const {id} = req.params
        const oneProduct = await Product.findById(id)
        res.status(200).json(oneProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//fonction de d'edit d'un produit 

module.exports.editProduct = async (req,res) => {

    try {
        const id = req.params.id
        const body = req.body
        const product = await Product.findById(id)
        const updateProduct = await Product.findByIdAndUpdate(product,body,{new: true})
    
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//fonction de delete d'un produit 

module.exports.deleteProduct = async (req,res) =>  {

    try {
        const id = req.params.id
        const productId = await Product.findById(id)
        if(!productId) {
            res.status(400).json({message: "desolé ce produit n'exist pas ! "})
        }
    
        await productId.deleteOne()
        res.status(200).json(`Produit  ${id}` + " Supprimé !")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}