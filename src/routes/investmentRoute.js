const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');

router.get('/', investmentController.list);
router.get('/new', (req, res) => res.render('investmentForm'));
router.post('/new', investmentController.create);
router.get('/edit/:id', (req, res) => {
  const investimento = Investment.getById(parseInt(req.params.id));
  if (!investimento) {
    return res.status(404).send('Investimento não encontrado');
  }
  res.render('investmentForm', { investimento });
});
router.post('/edit/:id', investmentController.update);
router.post('/delete/:id', investmentController.delete);

module.exports = router;
