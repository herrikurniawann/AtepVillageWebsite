// Chart Perkerjaan
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 450,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 60, label: "Petani Cap Tikus" },
          { y: 40, label: "Berkebun" },
          { y: 20, label: "Lain-lain" },
        ],
      },
    ],
  });
  chart.render();
};
