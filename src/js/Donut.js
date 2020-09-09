import React from 'react';
import ReactApexChart from 'react-apexcharts'


function Donut(props){


    let series = [44, 55, 41, 17, 15]
    let options = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: "20%"
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }



    return (


        <div id="donut">
            <ReactApexChart options={options} series={series} type="donut" width="40%"/>
        </div>
    );
}

export default Donut;