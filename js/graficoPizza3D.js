google.charts.load("current", { packages: ["corechart"] });

function desenharPizza3D() {
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
    is3D: true,
  };

  var grafico = new google.visualization.PieChart(
    document.getElementById("graficoPizza3D")
  );
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza3D);
