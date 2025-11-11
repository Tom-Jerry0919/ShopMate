// ...existing code...
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: [true, 'Price is required'], min: [0, 'Price cannot be negative'] },
    category: { type: String, required: [true, 'Category is required'] },
    isavailable: { type: Boolean, required: true, default: true },
    image: { type: String, required: [true, 'Image is required'] },
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String, required: [true, 'Comment is required'] },
            rating: { type: Number, required: [true, 'Rating is required'], min: 1, max: 5 }
        }
    ]
}, { timestamps: true });

// use mongoose.models guard to avoid OverwriteModelError with nodemon
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
// ...existing code...