const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.list);
router.get('/new', (req, res) => res.render('expenseForm'));
router.post('/new', expenseController.create);
router.get('/edit/:id', (req, res) => {
  const despesa = Expense.getById(parseInt(req.params.id));
  if (!despesa) {
    return res.status(404).send('Despesa não encontrada');
  }
  res.render('expenseForm', { despesa });
});
router.post('/edit/:id', expenseController.update);
router.post('/delete/:id', expenseController.delete);

module.exports = router;
