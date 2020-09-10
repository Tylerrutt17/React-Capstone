import React from 'react';
import ReactApexChart from 'react-apexcharts'


function Donut(props) {


    let series = { data: [44, 35] }
    let options = {
        chart: {
            type: 'donut',
            foreColor: '#FFFFFF',
            
        },
        legend: {
            position: 'bottom'
        },
        labels: ['AAPL', 'SBUX'],
        responsive: [{
            breakpoint: 480,
        }]
    }
    return (<ReactApexChart options={options} series={series.data} type="donut" width="100%" height="100%" />)
}

export default Donut;