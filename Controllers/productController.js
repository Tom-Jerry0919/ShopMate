const productModel = require('../Models/productModels');

// ✅ Create a new product
const createproduct = async (req, res) => {
  try {
    const {
      name,
      pname,
      price,
      description,
      brand,
      category,
      image,
      isavailable = true,
      reviews = []
    } = req.body;

    const productName = name || pname;

    if (!productName || price === undefined || !description || !brand || !category || !image) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const numericPrice = Number(price);
    if (Number.isNaN(numericPrice) || numericPrice < 0) {
      return res.status(422).json({ error: "Price must be a non-negative number" });
    }

    const available =
      typeof isavailable === 'string'
        ? isavailable.toLowerCase() === 'true'
        : Boolean(isavailable);


    const safeReviews = Array.isArray(reviews)
      ? reviews.map((r) => ({
          user: r.user,
          comment: String(r.comment || ''),
          rating: Number(r.rating || 0),
        }))
      : [];

   
    const product = await productModel.create({
      pname: productName,
      price: numericPrice,
      description,
      brand,
      category,
      image,
      isavailable: available,
      reviews: safeReviews,
    });

    return res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.price !== undefined) {
      const numericPrice = Number(updates.price);
      if (Number.isNaN(numericPrice) || numericPrice < 0) {
        return res.status(422).json({ error: "Price must be a non-negative number" });
      }
      updates.price = numericPrice;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createproduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
