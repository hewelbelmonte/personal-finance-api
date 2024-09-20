let despesas = [];
let nextId = 1;

exports.getAll = () => despesas;

exports.create = (despesa) => {
  despesa.id = nextId++;
  despesas.push(despesa);
};

exports.getById = (id) => {
  console.log('Procurando despesa com ID:', id);
  return despesas.find(despesa => despesa.id === id);
};

exports.update = (id, newDespesa) => {
  const index = despesas.findIndex(despesa => despesa.id === id);
  if (index !== -1) {
    despesas[index] = { ...despesas[index], ...newDespesa };
  }
};

exports.delete = (id) => {
  despesas = despesas.filter(despesa => despesa.id !== id);
};
