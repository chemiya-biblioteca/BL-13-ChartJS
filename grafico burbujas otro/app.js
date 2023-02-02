var marksCanvas = document.getElementById("marksChart");

const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const config =new Chart(marksCanvas, {
  
  type: 'bubble',
  data: data,
  options: {}
});