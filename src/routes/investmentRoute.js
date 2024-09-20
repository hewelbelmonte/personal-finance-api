const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');

router.get('/', investmentController.list);
router.get('/new', (req, res) => res.render('investmentForm', { investimento: null }));
router.post('/new', investmentController.create);
router.get('/edit/:id', investmentController.editForm);
router.post('/edit/:id', investmentController.update);
router.post('/delete/:id', investmentController.delete);

module.exports = router;
