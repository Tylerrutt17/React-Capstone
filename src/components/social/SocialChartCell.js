import React, {useState, useEffect} from 'react';
import '../../css/social/SocialChartCell.css'
import { Chart } from "react-google-charts";

function SocialChartCell({dayP, weekP, monthP, followers, name, stock, datapoints, onClick}) {
    //const [email, setEmail] = useState('')

    return (
        <div className={'social-cell'} onClick={onClick}>
            <h5>{stock}</h5>
            <h4>{name}</h4>
            <h5>{followers} Followers</h5>
            <h6>Performance</h6>
            <div className={'performance'}>
                <h5 className={'performance-item'}>1D:</h5>
                <h5 style={dayP>0 ? {color: '#57D900'} : {color: 'red'}}>{dayP}%</h5>
                <h5 className={'performance-item'}>1W:</h5>
                <h5 style={weekP>0 ? {color: '#57D900'} : {color: 'red'}}>{weekP}%</h5>
                <h5 className={'performance-item'}>1M:</h5>
                <h5 style={monthP>0 ? {color: '#57D900'} : {color: 'red'}}>{monthP}%</h5>
            </div>
            <div>
                <Chart
                    width={'100%'}
                    height={'100px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={datapoints}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}

export default SocialChartCell