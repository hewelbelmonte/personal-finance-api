const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.list);
router.get('/new', (req, res) => res.render('incomeForm', { renda: null}));
router.post('/new', incomeController.create);
router.get('/edit/:id', incomeController.editForm);
router.post('/edit/:id', incomeController.update);
router.post('/delete/:id', incomeController.delete);

module.exports = router;
