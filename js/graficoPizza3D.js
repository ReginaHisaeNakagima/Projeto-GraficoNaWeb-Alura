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
    height: 400,
    width: 900,
    is3D: true,
    legend: "labeled",
    pieSliceText: "value",
    //colors: ["red", "grey", "yellow", "blue", "pink", "purple"],
    slices: {
      0: {},
      1: { color: "gray" },
      2: { color: "#a6a6a6" },
      3: { color: "gray" },
      4: { offset: 0.2 },
      5: { color: "gray" },
    },
  };

  var grafico = new google.visualization.PieChart(
    document.getElementById("graficoPizza3D")
  );
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza3D);
