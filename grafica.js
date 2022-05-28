

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
      backgroundColor: 'rgb(0, 96, 255)',
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


const labels1 = [
      'camarero1',
      'camarero2',
      'camarero3',
      'camarero4',
      'camarero5',
      'camarero6',
      'camarero7',
      
    ];
  
    
  
  
  
    const data1 = {
      labels: labels1,
      datasets: [{
        label: 'Mesas',
        backgroundColor: 'rgb(0, 0, 255)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1, 5, 10, 15, 20, 25, 30],
      }]
    };
  
    const config1 = {
      type: 'bar',
      data: data1,
      options: {}
    };
  
     myChart1 = new Chart(
      document.getElementById('myChart1'),
      config1
    );