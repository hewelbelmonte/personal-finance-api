const Investment = require('../models/investmentModel');

exports.list = (req, res) => {
  const investimentos = Investment.getAll();
  res.render('investmentView', { investimentos });
};

exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Investment.create({ valor: parseFloat(valor), descricao });
  res.redirect('/investimentos');
};

exports.update = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Investment.update(parseInt(req.params.id), { valor: parseFloat(valor), descricao });
  res.redirect('/investimentos');
};

exports.delete = (req, res) => {
  Investment.delete(parseInt(req.params.id));
  res.redirect('/investimentos');
};
