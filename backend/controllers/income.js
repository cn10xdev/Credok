const incomeSchema = require("../models/incomeModel");


exports.addIncome = async (req, res) => {
    console.log(req.body);
    const {title, amount, category, description, date} = req.body;
    const income = incomeSchema({
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
        res.status(201).json({message: "Income added successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Income deleted successfully"});
        })
        .catch((err) => {
            res.status(500).json({error: err.message});
        });
}