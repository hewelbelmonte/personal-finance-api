const express = require('express');
const router = express.Router();
const Expense = require('../models/expenseModel');
const Income = require('../models/incomeModel');
const Investment = require('../models/investmentModel');

router.get('/', (req, res) => {
  const totalExpenses = Expense.getAll().reduce((acc, curr) => acc + curr.valor, 0);
  const totalIncome = Income.getAll().reduce((acc, curr) => acc + curr.valor, 0);
  const totalInvestments = Investment.getAll().reduce((acc, curr) => acc + curr.valor, 0);

  res.render('financialSummary', {
    totalExpenses,
    totalIncome,
    totalInvestments
  });
});

module.exports = router;
