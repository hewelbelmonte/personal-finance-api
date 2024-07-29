const Income = require('../models/incomeModel');

exports.list = (req, res) => {
  const receitas = Income.getAll();
  res.render('incomeView', { receitas });
};
exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Income.create({ valor: parseFloat(valor), descricao });
  res.redirect('/receitas');
};

exports.update = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Income.update(parseInt(req.params.id), { valor: parseFloat(valor), descricao });
  res.redirect('/receitas');
};

exports.delete = (req, res) => {
  Income.delete(parseInt(req.params.id));
  res.redirect('/receitas');
};
