import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const updateCountInStock = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.countInStock = product.countInStock - 1;
    const updatedCountInStock = await product.save();
    if (updatedCountInStock) {
      res.json(updatedCountInStock);
    } else {
      res.status(428);
      throw new Error('Sorry, not enough products on stock');
    }
  }
});

export { updateCountInStock };
