const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.list);
router.get('/new', (req, res) => res.render('incomeForm'));
router.post('/new', incomeController.create);
router.get('/edit/:id', (req, res) => {
  const receita = Income.getById(parseInt(req.params.id));
  if (!receita) {
    return res.status(404).send('Receita não encontrada');
  }
  res.render('incomeForm', { receita });
});
router.post('/edit/:id', incomeController.update);
router.post('/delete/:id', incomeController.delete);

module.exports = router;
