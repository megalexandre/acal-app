import { ChartType } from './chartjs.model';

/**
 * Line Area Chart
 */
 const lineAreaChart: ChartType = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
  datasets: [
    {
        label: "Sales Analytics",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(102,145,231, 0.2)",
        borderColor: "#6691E7",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#6691E7",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#6691E7",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
    },
    {
        label: "Monthly Earnings",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(19,197,107, 0.2)",
        borderColor: "#13C56B",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#13C56B",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#13C56B",
        pointHoverBorderColor: "#eef0f2",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
    }
  ],
  options: {
      defaultFontColor: '#8791af',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          xAxes: [
              {
                  gridLines: {
                      color: 'rgba(166, 176, 207, 0.1)',
                  },
              },
          ],
          yAxes: [
              {
                  ticks: {
                      max: 100,
                      min: 20,
                      stepSize: 10,
                  },
                  gridLines: {
                      color: 'rgba(166, 176, 207, 0.1)',
                  },
              },
          ],
      },

  }
};

/**
 * Line Bar Chart
 */
 const lineBarChart: ChartType = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Sales Analytics",
            backgroundColor: "rgba(133,167,236, 1)",
            borderColor: "rgba(133,167,236, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(133,167,236, 1)",
            hoverBorderColor: "rgba(133,167,236, 1)",
            data: [65, 59, 81, 45, 56, 80, 50,20]
        }
    ],
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)'
                    },
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)'
                    }
                }
            ]
        }
    }
  };

/**
 * Pie Chart
 */
 const pieChart: ChartType = {
  labels: [
    "Desktops",
    "Tablets"
        ],
  datasets: [
  {
      data: [300, 180],
      backgroundColor: ["#13C56B","#F3F6F9"],
      hoverBackgroundColor: ["#13C56B","#F3F6F9"],
      hoverBorderColor: "#fff"
  }],
  options: {
      maintainAspectRatio: false,
      legend: {
          position: 'top',
      }
  }
};

/**
 * Donut Chart
 */
 const donutChart: ChartType = {
  labels: [
    "Desktops",
    "Tablets"
  ],
  datasets: [
    {
        data: [300, 210],
        backgroundColor: ["#6691E7","#F3F6F9"],
        hoverBackgroundColor: ["#6691E7","#F3F6F9"],
        hoverBorderColor: "#fff"
    }],
  options: {
      maintainAspectRatio: false,
      legend: {
          position: 'top',
      }
  }
};

/**
 * Polar Chart
 */
 const polarChart: ChartType = {
  labels: [
    "Series 1",
    "Series 2",
    "Series 3",
    "Series 4"
  ],
  datasets: [{
      data: [
          11,
          16,
          7,
          18
      ],
      backgroundColor: ["#ED5E5E", "#13C56B", "#E8BC52", "#6691E7"],
      label: 'My dataset', // for legend
      hoverBorderColor: "#fff"
  }],
  options: {
      maintainAspectRatio: false,
      legend: {
          position: 'top',
      }
  }
};

/**
 * Redar Chart
 */
 const radarChart: ChartType = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [
      {
          label: "Desktops",
          backgroundColor: "rgba(19, 197, 107, 0.2)",
          borderColor: "#13C56B", //"#13C56B",
          pointBackgroundColor: "#13C56B", //"#13C56B",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#13C56B", //"#13C56B",
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: "Tablets",
          backgroundColor: "rgba(102, 145, 231, 0.2)", //"rgba(81, 86, 190, 0.2)",
          borderColor: "#6691E7", //"#6691E7",
          pointBackgroundColor: "#6691E7", //"#6691E7",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6691E7", //"#6691E7",
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ],
  options: {
      maintainAspectRatio: false,
      legend: {
          position: 'top'
      }
  }
};


export { lineAreaChart, lineBarChart, pieChart, donutChart, polarChart, radarChart};
