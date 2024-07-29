let receitas = [];
let nextId = 1;

exports.getAll = () => receitas;

exports.create = (receita) => {
  receita.id = nextId++;
  receitas.push(receita);
};

exports.getById = (id) => receitas.find(receita => receita.id === id);

exports.update = (id, newReceita) => {
  const index = receitas.findIndex(receita => receita.id === id);
  if (index !== -1) {
    receitas[index] = { ...receitas[index], ...newReceita };
  }
};

exports.delete = (id) => {
  receitas = receitas.filter(receita => receita.id !== id);
};
