const User = require("../models/user.model")


module.exports.setUsers = async (req,res) => {

    const {email} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
       return res.status("400").json({
        success: false, 
        message: "Desolé cet Utilisateur existe !"
       })
    }
    
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.getAllUsers = async (req,res) => {

    try {
        const userAll = await User.find({})
        res.status(200).json(userAll)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.getOneUser = async (req,res) => {
    try {
        const {id} = req.params
        const userOne = await User.findById(id)
        res.status(200).json(userOne)
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
}

module.exports.editUser = async (req,res) => {

    try {
        const id = req.params.id
        const body = req.body
        const user = await User.findById(id)
        const updateUser = await User.findByIdAndUpdate(user,body, {new: true})
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.deleteUser = async (req,res) => {
    try {
        const deleteUser = await User.findById(req.params.id)
        if(!deleteUser){
            res.status(400).json({message: "desolé information non trouvée !"})
        }
        await deleteUser.deleteOne()
        res.status(200).json(`Utilisateur ID ${req.params.id} Supprimé`);
    } catch (error) {
        
    }
}

module.exports.signup = async (req,res) => {
    try {
        const {email} = req.body
        const userExist = await User.findOne({email})
        if(userExist){
            res.status("400").json({success: false, message: "Desolé cet Utilisateur existe !"})
        }
    } catch (error) {
        
    }
}