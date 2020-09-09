import React, {useState, useEffect} from 'react';
import '../css/social/Social.css'

// Importing Components
import Search from '../components/social/Search'
import Dropdown from '../components/social/Dropdown'
import Button from '../components/social/Button'
import SocialChartCell from '../components/social/SocialChartCell'
import LeaderCell from '../components/social/LeaderCell'

function Social() {

    //const [email, setEmail] = useState('')

    const clickButton=(evt)=> {
        console.log("button clicked")
    }

    // sample data
    const datapoints = [
        ['x', '$'],
        [0, 0],
        [1, 10],
        [2, 23],
        [3, 17],
        [4, 18],
        [5, 9],
        [6, 11],
        [7, 27],
        [8, 33],
        [9, 200],
        [10, 32],
        [11, 35],
    ]

    return (
        <div>
            <div>
                <h3 className={'leaders-title-lbl sansserif'}>Our Featured Leaders</h3>
                <div className={'leaders-view'}>
                    <LeaderCell name={"Elon Musk"} followers={10} pc={'2.31'}/>
                    <LeaderCell name={"Elon Tusk"} followers={15} pc={'99.31'}/>
                    <LeaderCell name={"XEA-something"} followers={20} pc={'-7.73'}/>
                    <LeaderCell name={"Elon"} followers={25} pc={'2.31'}/>
                    <LeaderCell name={"Elon"} followers={25} pc={'2.31'}/>
                    <LeaderCell name={"Elon"} followers={25} pc={'2.31'}/>
                    <LeaderCell name={"Elon"} followers={25} pc={'2.31'}/>
                    <LeaderCell name={"Elon"} followers={25} pc={'2.31'}/>
                </div>
            </div>
            <div className={'attributes-container'}>
                <div className={'attributes-view-1'}>
                    <Search/>
                    <Dropdown/>
                </div>
                <div className={'attributes-view-2'}>
                    <Dropdown/>
                    <Button title={'Become A Leader'} onClick={clickButton} id={'click-me'}/>
                </div>
            </div>
            <div className={'Social-Chart-Container'}>
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
                <SocialChartCell name={'Elon Musk'} dayP={'69.42'} weekP={'-1.65'} monthP={'87.97'} followers={'21'} stock={'AAPL'} datapoints={datapoints} />
            </div>
        </div>
    )
}

export default Social