import React from 'react';
import "../css/Nav.css";
import logo from '../logo.svg';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import TuneIcon from '@material-ui/icons/Tune';
import PeopleIcon from '@material-ui/icons/People';

const Nav = ( {active} ) => {

    const getColor = (type) => {
        return (type === active ? 'primary' : 'default')
    }

    return (
        <div className = 'Nav__body'>
            <div className = 'Nav__logoWrapper'><img src={logo} className="Nav__logo" alt="logo" />B Cubed</div>
            <div className="Nav___dashboard">
                <DashboardIcon />
                <Button to="/dashboard" component={Link} color = {getColor("dashboard")}>Dashboard</Button>
            </div>
            <div className="Nav___automation">
                <TuneIcon />
                <Button to="/automation" component={Link} color = {getColor("automation")}>Automation</Button>
            </div>
            <div className="Nav___social">
                <PeopleIcon />
                <Button to="/social" component={Link} color = {getColor("social")}>Social</Button>
            </div>
        </div>
    )
}

export default Nav
