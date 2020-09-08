import React from 'react'
import '../css/Automation.css'
import StockInfo from './StockInfo'
import {getStockInfo} from './getStockInfo'

const Automation = () => {



    return (
        <div className = 'Automation__body'>
            <div className = 'Automation__header'>
            </div>
            <div className = 'Automation__settings'>
            </div>
            <div className = 'Automation__allocations'>
                {getStockInfo().map(stock => (
                    // logic to render messages differently depending on sender
                    <StockInfo asset = {stock.name} allocation = {stock.allocation} />
                ))}
            </div>
        </div>
    )
}

export default Automation
