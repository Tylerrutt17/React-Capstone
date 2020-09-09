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
                    <h6>Change since Yeesterday</h6>
                    <p className= "floatchange">27.3%</p>
                </div>
                <div id = 'floatbox top-dash'>
                    <h6>Lobster Total</h6>
                    <p className= "floatchange">$12,453.76</p>
                </div>
                <div id = 'floatbox top-dash'>
                    <h6>Change in Dollars</h6>
                    <p className= "floatchange">$586.54</p>
                </div>
            </div>
            <div className="chart-flex">
                <div className="chart">
                    <Chart />
                </div>
                
            </div>
            <div className= "donut-flex">
                <Donut/>
            </div>
        </div>
    );
}

export default Dashboard;