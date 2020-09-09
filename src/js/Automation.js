import React from 'react'
import '../css/Automation.css'
import StockInfo from './StockInfo'
import {getStockInfo} from './getStockInfo'
import getPortfolioInfo from './getPortfolioInfo'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const Automation = () => {

    const handleChange = () => {
        console.log("this will hit the database")
    }


    return (
        <div className = 'Automation__body'>
            <div className = 'Automation__header'>
                {/* later on this needs to take in the portfolio as a param, dtermine if active, return correct icon */}
                <CheckCircleOutlineRoundedIcon style={{fill: "green"}}/>
                <div>{getPortfolioInfo()[0].name}</div>
                <EditRoundedIcon style={{fill: "grey"}}/>
            </div>
            <div className = 'Automation__details'>
                <div className = 'Automation__settings'>
                    <div className = 'Automation__portfolioDetails'>Active Portfolio
                        <div>
                            {/* <p>Portfolio {getPortfolioInfo()[0].id}</p> */}
                            <p>${getPortfolioInfo()[0].funds}</p>
                        </div>
                    </div>
                    <div className = 'Automation__allocation'>
                        <div>Asset Allocation</div>
                        <div className = "Automation__ DE_Buttons">
                            <Button className='Automation_delete' to="" component={Link} variant="contained" color="default"
                                >Delete Index
                            </Button>
                              Or  
                            <Button className='Automation__edit' to="" component={Link} variant="contained" color="primary"
                                >Edit Index
                            </Button>
                        </div>
                    </div>
                    <div className = 'Automation__strategy'>
                        <div>Reblance Strategy</div>
                        <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Gender</FormLabel> */}
                        <RadioGroup aria-label="strategy" name="strategy1" defaultValue="periodic" onChange={handleChange}>
                            <FormControlLabel value="periodic" control={<Radio />} label="Periodic" />
                            <FormControlLabel value="threshold" control={<Radio />} label="Threshold" />
                        </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className = 'Automation__allocations'>
                    <div className = 'Automation__StockHeader'><p>Asset</p><p>Allocation</p><p>Percent</p></div>
                    {getStockInfo().map(stock => (
                        // logic to render messages differently depending on sender
                        <StockInfo asset = {stock.name} allocation = {stock.allocation} portfolioID = {stock.portfolio_id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Automation
