db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
}, { 
  $currentDate: {
    ultimaModificacao: { $type: "date" },
  },
});

db.resumoProdutos.find({
}, {
  _id: false,
});
