var oilCanvas = document.getElementById("oilChart");



var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ],
            borderColor: "black",
            borderWidth: 2
        }]
};

var chartOptions = {
   
    
    legend: {
      position: 'left'
    },
    animation: {
      animateRotate: false,
      animateScale: true
    }
  };
  
  var pieChart = new Chart(oilCanvas, {
    type: 'doughnut',
    data: oilData,
    options: chartOptions
  });