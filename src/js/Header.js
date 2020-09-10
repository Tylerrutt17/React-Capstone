import React from 'react';
import "../css/Header.css";
import '../css/App.css';
import logo from '../logo.svg';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        // learn BEM
        <div className="header">
            <IconButton>
                <ChatIcon className = "header__icon"/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon className = "header__icon"/>
            </IconButton>
            <IconButton>
                <AccountBalanceIcon className = "header__icon"/>
            </IconButton>
            <IconButton>
                <PaymentIcon className = "header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
