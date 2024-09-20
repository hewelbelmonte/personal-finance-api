const Investment = require('../models/investmentModel');

exports.list = (req, res) => {
  const investimentos = Investment.getAll();
  res.render('investmentView', { investimentos, investimento: null });
};

exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Investment.create({ valor: parseFloat(valor), descricao });
  console.log('Investimento criado:', { valor: parseFloat(valor), descricao });
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

exports.editForm = (req, res) => {
  const id = parseInt(req.params.id);
  console.log('ID recebido para edição:', id);
  const investimento = Investment.getById(id);
  console.log('Investimento encontrada:', investimento); 
  if (!investimento) {
    return res.status(404).send('Investimento não encontrada');
  }
  const investimentos = Investment.getAll();
  res.render('investmentView', { investimentos, investimento });
};