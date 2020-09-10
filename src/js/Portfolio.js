import React from 'react';
import LineChart from './LineChart';
import '../css/App.css'
import Donut from './Donut'



function Portfolio(props) {

    return (
        <div className="body portfolio_bod">
            <h1>{props.name}</h1>
            <div className="dash-change">
                <div id='floatbox top-dash'>
                    <h6>Change since Yeesterday</h6>
                    <p className="floatchange">27.3%</p>
                </div>
                <div id='floatbox top-dash'>
                    <h6>Lobster Total</h6>
                    <p className="floatchange">$12,453.76</p>
                </div>
                <div id='floatbox top-dash'>
                    <h6>Change in Dollars</h6>
                    <p className="floatchange">$586.54</p>
                </div>
            </div>
            <div className="port-flex">
                <div className="portfolio-chart">
                    <LineChart />
                </div>
                <div className="donut-flex">
                    <Donut height ="200px"/>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;