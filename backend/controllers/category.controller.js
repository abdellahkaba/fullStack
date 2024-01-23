const Category = require("../models/category.model")



module.exports.setCategories = async (req,res) => {

    if(!req.body.name){
        res.status(400).json({message: "Veuillez saisir un nom catégory"})
    }

    const category = await Category.create({
        name: req.body.name,
        description: req.body.description
    })

    res.status(200).json(category)

}

//une fonction qui retourne la liste des catégory

module.exports.getCategories = async (req,res) => {
    try {
        const allCategories = await Category.find({})
        res.status(200).json(allCategories)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Recherche d'une category

module.exports.getOneCategorie = async (req,res) => {

    try {
        const { id } = req.params
        const oneCategory = await Category.findById(id)
        res.status(200).json(oneCategory)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Modification d'une catégory

module.exports.editCategories = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const category = await Category.findById(id)
        const updateCategory = await Category.findByIdAndUpdate(category,body,{new: true})
        res.status(200).json(updateCategory)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Suppressin de category

module.exports.deleteCategory = async (req, res) => {
    try {
        const categoryId = await Category.findById(req.params.id);
        if (!categoryId) {
            return res.status(400).json({ message: "Information non trouvée !" });
        }

        await categoryId.deleteOne();

        res.status(200).json(`Category ID ${req.params.id} Supprimé`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
