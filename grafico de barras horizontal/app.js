var densityCanvas = document.getElementById("densityChart");



var densityData = {
  label: 'Density of Planets (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};

var chartOptions = {
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        min: 0,
        max: 6500,
        stepSize: 1300
      }
    }
  },
  
  elements: {
    bar: {
      borderWidth: 2,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    }, title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart'
    }
  }

  
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData],
  },
  options: chartOptions
});