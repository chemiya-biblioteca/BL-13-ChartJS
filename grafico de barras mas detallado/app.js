var popCanvas = document.getElementById("popChart");
Chart.defaults.font.family="Lato"
Chart.defaults.font.size = 18;
Chart.defaults.color = "blue";
var barChart = new Chart(popCanvas, {
    type: 'bar',
    data: {
      labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
      datasets: [{
        label: 'Population',
        data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 50,
            color: "black",
            font: {
              size: 24,
              weight: "bold"
            }
          }
        },
        tooltip: {
          cornerRadius: 0,
          caretSize: 0,
          padding: 10,
          backgroundColor: 'black',
          borderColor: "gray",
          borderWidth: 5,
          titleMarginBottom: 4,
          titleFont: {
            "weight": "bold",
            "size": 22
          }
        }
      }
    }
    
  });