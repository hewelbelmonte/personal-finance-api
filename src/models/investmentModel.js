let investimentos = [];
let nextId = 1;

exports.getAll = () => investimentos;

exports.create = (investimento) => {
  investimento.id = nextId++;
  investimentos.push(investimento);
};

exports.getById = (id) => {
  console.log('Procurando investimento com ID:', id);
  return investimentos.find(investimento => investimento.id === id);
};

exports.update = (id, newInvestimento) => {
  const index = investimentos.findIndex(investimento => investimento.id === id);
  if (index !== -1) {
    investimentos[index] = { ...investimentos[index], ...newInvestimento };
  }
};

exports.delete = (id) => {
  investimentos = investimentos.filter(investimento => investimento.id !== id);
};
