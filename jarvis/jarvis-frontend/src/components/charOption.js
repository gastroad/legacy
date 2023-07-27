const chartOptions = {
  // maintainAspectRatio: false, // disables size , defua
  tooltips: {
    mode: "label"
  },
  elements: {
    line: {
      tension: false, // disables bezier curves
      fill: false // under Line fill "use line color"
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: true
        }
      }
    ],
    yAxes: [
      {
        id: "y-axis-2",
        gridLines: {
          display: false
        },
        labels: {
          show: false
        }
      }
    ]
  }
};
export { chartOptions };
