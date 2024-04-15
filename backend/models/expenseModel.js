const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },

    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },

    type: {
        type: String,
        default: 'expense'
    },

    date: {
        type: Date,
        default: Date.now,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,
        maxLength: 200
    },

}, {timestamps: true});

module.exports = mongoose.model('Expense', expenseSchema);