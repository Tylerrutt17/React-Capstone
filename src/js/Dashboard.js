import React from 'react';
import Chart from './Chart';
import '../css/App.css'
import Donut from './Donut'



function Dashboard(props) {
    

    return (
        <div className="body dashboard_bod">
            <h1>Welcome {props.name}</h1>
            <div className ="dash-change">
                <div id = 'floatbox top-dash'>
                    <h4>Change since Yeesterday</h4>
                    <p className= "floatchange">27.3%</p>
                </div>
                <div id = 'floatbox top-dash'>
                    <h4>Lobster Total</h4>
                    <p className= "floatchange">$12,453.76</p>
                </div>
                <div id = 'floatbox top-dash'>
                    <h4>Change in Dollars</h4>
                    <p className= "floatchange">$586.54</p>
                </div>
            </div>
            <div className="chart-flex">
                <div className="dashboard-chart chart">
                    <Chart />
                </div>
                <div className="donut-flex chart">
                    <Donut />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;