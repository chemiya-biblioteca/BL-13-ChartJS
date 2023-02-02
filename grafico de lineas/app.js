var speedCanvas = document.getElementById("speedChart");

Chart.defaults.font.family="Lato"
Chart.defaults.font.size = 18;

var speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [{
      label: "Car Speed",
      data: [0, 59, 75, 20, 20, 55, 40],
      lineTension: 0,
      fill: false,
      borderColor: 'orange',
      backgroundColor: 'transparent',
      borderDash: [5, 5],
      pointBorderColor: 'orange',
      pointBackgroundColor: 'rgba(255,150,0,0.5)',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: 'rectRounded'
    }]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    },
    scales: {
      x: {
        
        title: {
          display: true,
          text: "Time in Seconds",
          
        }
      },
      y: {
        
        title: {
          display: true,
          text: "Speed in Miles per Hour",
          
        }
      }
    }
  };

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});