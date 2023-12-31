//Importing Express :
const express = require("express");

//Appelez Express pour créer le routeur de chaque midellware :
const router = express.Router();

//Importing a productmodels de models :
const Product = require("../models/productModel");
//const reate = require("../Actions/Create");


//Routes CRUD

// Obtenir tous les produits
// router.get('/', async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/Create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findByIdAndUpdate(_id, req.body);

    if (!product) {
      return res
        .status(400)
        .json({ message: `Impossible de trouver un produit avec ID ${_id}` });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Supprimer un produit
// router.delete('/:id', async (req, res) => {
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findByIdAndDelete(_id);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Impossible de trouver un produit avec ID ${_id}` });
    }

    res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtenir un produit par ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Impossible de trouver un produit avec ID ${_id}` });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Exportation routes :
module.exports = router;
