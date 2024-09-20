let rendas = [];
let nextId = 1;

exports.getAll = () => rendas;

exports.create = (renda) => {
  renda.id = nextId++;
  rendas.push(renda);
};

exports.getById = (id) => rendas.find(renda => renda.id === id);

exports.update = (id, newRenda) => {
  const index = rendas.findIndex(renda => renda.id === id);
  if (index !== -1) {
    rendas[index] = { ...rendas[index], ...newRenda };
  }
};

exports.delete = (id) => {
  rendas = rendas.filter(renda => renda.id !== id);
};
