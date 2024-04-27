import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const productionData = [100, 120, 150, 180, 200, 170, 160, 190, 210, 230, 220, 250];
  function ProductionChart() {
    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'Monthly Production',
          data: productionData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const chartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive: true, // Adjust chart size for different screens
    };
  
    return <Bar data={chartData} options={chartOptions} />;
  }
  

}
export default BarChart;