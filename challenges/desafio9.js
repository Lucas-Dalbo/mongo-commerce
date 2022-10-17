db.produtos.find({
  "valoresNutricionais.0.quantidade": { $lt: 500 },
}, { 
  _id: false, 
  nome: true,
});