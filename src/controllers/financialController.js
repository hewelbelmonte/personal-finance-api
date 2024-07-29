const Financial = require('../models/financialModel');

exports.summary = (req, res) => {
  const summary = Financial.getSummary();
  res.render('financialView', { summary }); 
};