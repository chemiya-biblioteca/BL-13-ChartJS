var marksCanvas = document.getElementById("marksChart");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 22;
Chart.defaults.color = "black";

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Martha",
    backgroundColor: "transparent",
    borderColor: "red",
    fill: false,
    pointRadius: 6,
    pointHitRadius: 12,
    pointBorderWidth: 3,
    pointBackgroundColor: "pink",
    pointBorderColor: "black",
    pointHoverRadius: 10,
    pointStyle: "triangle",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Steven",
    backgroundColor: "transparent",
    borderColor: "blue",
    fill: false,
    pointRadius: 6,
    pointHitRadius: 12,
    pointBorderWidth: 3,
    pointBackgroundColor: "lightblue",
    pointBorderColor: "black",
    pointHoverRadius: 10,
    pointStyle: "rect",
    data: [54, 65, 60, 70, 70, 75]
  },
  {
    label: "Harry",
    backgroundColor: "transparent",
    borderColor: "green",
    fill: false,
    pointRadius: 6,
    pointHitRadius: 12,
    pointBorderWidth: 3,
    pointBackgroundColor: "lightgreen",
    pointBorderColor: "black",
    pointHoverRadius: 10,
    pointStyle: "circle",
    data: [84, 56, 75, 40, 90, 85]
  }]
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      text: "Comparing Student Performance",
      position: "bottom"
    },
    legend: {
      position: "bottom",
      labels: {
        padding:  30
      }
    }
  },
  scales: {
    r: {
      max: 100,
      min: 30,
      ticks: {
        stepSize: 15,
        backdropColor: "orange",
        color: "white"
      },
      grid: {
        color: "black"
      },
      angleLines: {
          color: "gray"
      },
      pointLabels: {
        font: {
          size: 20
        }
      }
    }
  }
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: chartOptions
});