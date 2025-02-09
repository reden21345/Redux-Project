const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Shoe name'],
        trim: true,
        maxLength: [100, 'Shoe name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter shoe price'],
        maxLength: [5, 'shoe name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter shoe description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this shoe'],
        enum: {
            values: [
                'Athletic',
                'Derby',
                'Oxford',
                'Brogue',
                'Monk Strap',
                'Loafer',
                "Wholecut",
                'Mocassin',
                'Driving Shoe',
                'Boat Shoes',
                'Platform Shoes',
                'Boots'
            ],
            message: 'Please select correct category for shoe'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter shoe seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter shoe stock'],
        maxLength: [5, 'Shoe name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('product', productSchema)