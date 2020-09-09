import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useParams } from 'react-router-dom';
import ApexCharts from 'apexcharts'




function LineChart() {
    let [chartPrices, setchartPrices] = useState([]);

    const getInfo = async () => {
        const rawData = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`);
        const chartData = await rawData.json();
        console.log(rawData)
        console.log(chartData)

        chartPrices = chartData.prices
        setchartPrices(chartPrices)

    }
    useEffect(() => {
        getInfo()
    }, []);

    const series = [{
        name: 'SBUX', data: [20, 24, 21, 28, 32, 30, 36, 42, 48, 41]
    },
    { name: 'AAPL', data: [136, 129, 131,135, 137, 139, 137, 141, 145, 158] }];

    const options = {
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            foreColor: '#ffffff',
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 1
        },
        colors: ["#1EB954", "#247BA0"],
        stroke: {curve: 'smooth'},
        plotOptions: {
            bar: {
                columnWidth: "20%"
            }
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [
            {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#1EB954"
                }
            },
            {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#247BA0"
                }
            }
        ],
        tooltip: {
            enabled: true,
            shared: false,
            intersect: true,
            x: {
                show: true
            }
        },
        legend: {
            horizontalAlign: "left",
            offsetX: 40
        }
    }

    return (

        <ReactApexChart
            options={options}
            series={series}
            type="line"
        />

    );
}

export default LineChart;
