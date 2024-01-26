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

//Authentification
module.exports.auth = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "E-mail et Mot de passe sont requis ! "
            })
        }
        //check user E-mail exist database
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "E-mail Invalide !"
            })
        }

        //Verify user password calling the function comparePassword since usermodel
        const isMatched = await user.comparePassword(password)
        if(!isMatched){
            return res.status(400).json({
                success: false,
                message: "Password Invalide !"
            })
        }

        // auth
         
        res.status(200).json({
            success: true,
            user
        })


    } catch (error) {
       console.log(error);
       return res.status(400).json({
        success: false,
        message: "Cannot log in, check your credential ! "
       }) 
    }
}