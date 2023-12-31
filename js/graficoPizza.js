function desenharPizza() {
  var tabela = new google.visualization.DataTable();
  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "valores");
  tabela.addRows([
    ["Educação", 2000],
    ["Transporte", 500],
    ["Lazer", 230],
    ["Saúde", 50],
    ["Cartão de crédito", 900],
    ["Alimentação", 260],
  ]);

  var opcoes = {
    title: "Tipos de Gastos",
    height: 300,
    width: 400,
  };

  var grafico = new google.visualization.PieChart(
    document.getElementById("graficoPizza")
  );
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);
