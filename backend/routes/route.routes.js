const express = require ("express")
const { setCategories, getCategories, getOneCategorie, editCategories, deleteCategory } = require("../controllers/category.controller")
const { setProducts, getAllProducts, getOneProduct, editProduct, deleteProduct } = require("../controllers/product.controller")
const { setUsers, getAllUsers, getOneUser, editUser, deleteUser } = require("../controllers/user.controller")

const router = express.Router()
//Les routes de Catégories
router.post("/category", setCategories)

router.get("/category", getCategories)

router.get("/category/:id", getOneCategorie)

router.put("/category/:id", editCategories)

router.delete("/category/:id", deleteCategory)
//Les routes de product

router.post("/product", setProducts)

router.get("/product", getAllProducts)

router.get("/product/:id", getOneProduct)

router.put("/product/:id", editProduct)

router.delete("/product/:id", deleteProduct)
//Les routes User

router.post("/user", setUsers)

router.get("/user", getAllUsers)

router.get("/user/:id", getOneUser)

router.put("/user/:id", editUser)

router.delete("/user/:id", deleteUser)
module.exports = router 