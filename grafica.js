

const labels = [
    'camarero1',
    'camarero2',
    'camarero3',
    'camarero4',
    'camarero5',
    'camarero6',
    'camarero7',
    
  ];

  



  const data = {
    labels: labels,
    datasets: [{
      label: 'Money',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [50, 100, 150, 200, 250, 300, 350],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

   myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


