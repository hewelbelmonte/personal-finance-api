const Expense = require('../models/expenseModel');

exports.list = (req, res) => {
  const despesas = Expense.getAll();
  res.render('expenseView', { despesas, despesa: null });
};

exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Expense.create({ valor: parseFloat(valor), descricao });
  console.log('Despesa criada:', { valor: parseFloat(valor), descricao });
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

exports.editForm = (req, res) => {
  const id = parseInt(req.params.id);
  console.log('ID recebido para edição:', id); // Log do ID recebido
  const despesa = Expense.getById(id);
  console.log('Despesa encontrada:', despesa); // Log da despesa encontrada
  if (!despesa) {
    return res.status(404).send('Despesa não encontrada');
  }
  const despesas = Expense.getAll();
  res.render('expenseView', { despesas, despesa });
};


