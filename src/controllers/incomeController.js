const Income = require('../models/incomeModel');

exports.list = (req, res) => {
  const rendas = Income.getAll();
  res.render('incomeView', { rendas, renda: null }); 
};

exports.create = (req, res) => {
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Income.create({ valor: parseFloat(valor), descricao });
  console.log('Receita criada:', { valor: parseFloat(valor), descricao });
  res.redirect('/rendas');
  
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const { valor, descricao } = req.body;
  if (!valor || !descricao) {
    return res.status(400).send('Valor e descrição são obrigatórios');
  }
  Income.update(parseInt(req.params.id), { valor: parseFloat(valor), descricao });
  res.redirect('/rendas');
};

exports.delete = (req, res) => {
  Income.delete(parseInt(req.params.id));
  res.redirect('/rendas');
};

exports.editForm = (req, res) => {
  const id = parseInt(req.params.id);
  console.log('ID recebido para edição:', id);
  const renda = Income.getById(id);
  console.log('Receita encontrada:', renda); 
  if (!renda) {
    return res.status(404).send('Renda não encontrada');
  }
  const rendas = Income.getAll();
  res.render('incomeView', { rendas, renda });
};