google.charts.load("current", { packages: ["corechart"], language: "pt" });

function desenharGraficos() {
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

  tabela = new google.visualization.DataTable();
  tabela.addColumn("string", "mês");
  tabela.addColumn("number", "gastos");
  tabela.addRows([
    ["jan", 800],
    ["fev", 400],
    ["mar", 1100],
    ["abr", 400],
    ["mai", 500],
    ["jun", 750],
    ["jul", 1500],
    ["ago", 650],
    ["set", 850],
    ["out", 400],
    ["nov", 1000],
    ["dez", 720],
  ]);

  var opcoes = {
    title: "Gastos por mês",
    width: 650,
    height: 300,
    vAxis: {
      format: "currency",
      gridlines: { color: "transparent" },
    },
    curveType: "function",
    legend: "none",
  };

  var grafico = new google.visualization.LineChart(
    document.getElementById("graficoLinha")
  );
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharGraficos);
