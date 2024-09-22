const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoute');
const investmentRoutes = require('./routes/investmentRoute');
const incomeRoutes = require('./routes/incomeRoute');
const financialRoutes = require('./routes/financialRoute');

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/despesas', expenseRoutes);
app.use('/rendas', incomeRoutes);
app.use('/investimentos', investmentRoutes);
app.use('/', financialRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
