const Product = require("../models/product");
const products = require("../products");
const findMissingItems = require("../utils/findMissingItems");

const productController = {

  async feedAll(req,res,next){
    try {
      const oldProducts = await Product.find();
      const itemsToAdd = findMissingItems(oldProducts,products,"name");
      const newProducts = await Product.insertMany(itemsToAdd);
      if(newProducts.length){
        return res.status(201).json({ products:newProducts });
      }else{
        return res.status(201).json({ message:"Everything is already upto dated" });
      }
    } catch (error) {
      return next(error);
    }
  },


  async getAll(req, res, next) {
    try {
      const { sort_val, order, filter } = req.query;
      const filterObj = {};
  
      if (filter) {
        filterObj.name = { $regex: filter, $options: 'i' };
      }
  
      const sortObj = {};
  
      if (sort_val) {
        sortObj[sort_val] = order === 'asc' ? 1 : -1;
      }
  
      const products = await Product.find(filterObj).sort(sortObj);
      return res.status(200).json({ products });
    } catch (error) {
      return next(error);
    }
  },
  

  async getById(req, res, next) {
    try {
      
      const productId = req.params.id;
      const product = await Product.find({
        _id:productId
      });
      return res.status(201).json({ product });
    } catch (error) {
      return next(error)
    }
  },
};

module.exports = productController;
