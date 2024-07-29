const Expense = require('./expenseModel');
const Income = require('./incomeModel');

exports.getSummary = () => {
  const expenses = Expense.getAll();
  const incomes = Income.getAll();

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const availableForInvestments = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    availableForInvestments
  };
};