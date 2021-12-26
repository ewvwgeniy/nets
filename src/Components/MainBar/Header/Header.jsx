import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div onClick={props.searchRowTextDefault} className={s.logo}>
        <NavLink to='/product'>Phones.net</NavLink>
      </div>
      <div className={s.pages}>
        <span onClick={props.searchRowTextDefault}>
          <NavLink to="/product" activeClassName={s.active}>itemlist</NavLink>
        </span>
        <span onClick={props.searchRowTextDefault}><NavLink to="/wishlist" activeClassName={s.active}>wishlist</NavLink>
        </span>
      </div>
    </header>
  );
}

export default Header