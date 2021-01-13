import React from 'react'
import s from "./WishItem.module.css";
import {NavLink} from "react-router-dom";

const WishItem = (props) => {
    let onRemoveItem = () => {
        props.removeItem(props.id)
    }
    let onLinkClick = (id) => {
        props.increaseViews(props.id)
    }
    let path = "/product/" + props.id

    return (
        <li className={s.item}>
            <div className={s.item_name}>
                <NavLink to={path} onClick={onLinkClick}>{props.item_name}</NavLink>
            </div>
            <div className={s.item_price}>
                <p>{props.item_price}</p>
            </div>
            <div className={s.item_add_date}>
                <time dateTime={props.add_date}>{props.add_date}</time>
            </div>
            <div className={s.item_remove}>
                <button onClick={onRemoveItem}>Remove</button>
            </div>
        </li>
    )

}

export default WishItem