const Expense = require('../models/expenseModel');

exports.list = (req, res) => {
  const despesas = Expense.getAll();
  res.render('expenseView', { despesas });
};

exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Expense.create({ valor: parseFloat(valor), descricao });
  res.redirect('/despesas');
};

exports.update = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Expense.update(parseInt(req.params.id), { valor: parseFloat(valor), descricao });
  res.redirect('/despesas');
};

exports.delete = (req, res) => {
  Expense.delete(parseInt(req.params.id));
  res.redirect('/despesas');
};
