import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header} >
            <NavLink to='/product'><span onClick={props.searchRowTextDefault}>Phones.net</span></NavLink>
        </header>
    );
}

export default Header