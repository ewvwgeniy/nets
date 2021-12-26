import React from 'react'
import s from './Item.module.css'
// import {NavLink} from "react-router-dom";

const Item = (props) => {
    // let path = "/product/" + props.item_data.id
    let addItem = () => {
        props.addItem(props.item_data)
    }
    /*let onLinkClick = (id) => {
        props.increaseViews(props.item_data.id)
    }*/

    return (
        <li className={s.item}>
            {/*<NavLink to={path} onClick={onLinkClick}>*/}
            <img src={props.item_data.item_img_url} alt={props.item_data.item_name}/>
            {/*</NavLink>*/}
            <div className={s.info}>
                {/*<NavLink to={path} onClick={onLinkClick}>*/}
                    <span onClick={props.searchRowTextDefault}>
                        {props.item_data.item_name}
                    </span>
                {/*</NavLink>*/}
                <p>{props.item_data.item_price}</p>
                <button onClick={addItem}>Add to wishlist</button>
            </div>
        </li>
    );
}

export default Item