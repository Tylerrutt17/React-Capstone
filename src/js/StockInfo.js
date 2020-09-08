import React, {useState} from 'react'
import '../css/StockInfo.css'
import TextField from '@material-ui/core/TextField';


const StockInfo= ({asset, allocation}) => {
    const [percent, setPercent] = useState("");

    return (
        <div className = "StockAllocation__body">
            <div className = "StockAllocation__stockName">{asset}</div>
            <div className = 'StockAllocation__AllocationBar'>Progress bar goes here</div>
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
