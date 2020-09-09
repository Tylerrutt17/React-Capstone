import React, {useState} from 'react'
import '../css/StockInfo.css'
import TextField from '@material-ui/core/TextField';
// import Slider from '@material-ui/core/Slider';
import { Slider } from 'material-ui-slider';
import {getStockInfo} from './getStockInfo'
import getPortfolioInfo from './getPortfolioInfo'


const StockInfo= ({asset, allocation, portfolioID}) => {
    const [percent, setPercent] = useState("");



    return (
        <div className = "StockAllocation__body">
            <div className = "StockAllocation__stockName">{asset}</div>
            <div className = 'StockAllocation__AllocationBar'>Slider bar goes here
                {/* <Slider
                value = {3}
                onChange={onChange} // for example updating a state value
                onChangeCommitted={handleChange} // for example fetching new data
                /> */}
                <Slider 

                    defaultValue={allocation}
                    // max = {100 - getPortfolioInfo()[portfolioID].percent_allocated + allocation}
                    // onChange={(e, val) => }
                    // onChangeComplete={}
                >
                </Slider>
            </div>
            <div>
                <TextField className = "StockAllocation__Percent"
                    variant="standard"
                    placeholder={allocation}
                    margin="normal"
                    required
                    onChange={(e) => setPercent(e.target.value)}
                    value={percent}
                /> %
            </div>
        </div>
    )
}

export default StockInfo
