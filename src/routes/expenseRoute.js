const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.list);
router.get('/new', (req, res) => res.render('expenseForm', { despesa: null }));
router.post('/new', expenseController.create);
router.get('/edit/:id', expenseController.editForm);
router.post('/edit/:id', expenseController.update);
router.post('/delete/:id', expenseController.delete);

module.exports = router;
