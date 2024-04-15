const expenseSchema = require("../models/expenseModel");


exports.addExpense = async (req, res) => {
    console.log(req.body);
    const {title, amount, category, description, date} = req.body;
    const income = expenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    console.log(income);
    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({error: "All fields are required"});
        }
        if (amount <= 0 || amount === 'number'){
            return res.status(400).json({error: "Amount must be a positive number"});
        
        }
        await income.save();
        res.status(201).json({message: "Expense added successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const incomes = await expenseSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    expenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Expense deleted successfully"});
        })
        .catch((err) => {
            res.status(500).json({error: err.message});
        });
}