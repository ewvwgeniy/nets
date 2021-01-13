import React from 'react'
import s from './ItemPage.module.css'

const ItemPage = (props) => {
    let onAddItem = () => {
        props.addItem(props.item_data)
    }
    return (
        <div className={s.item_page}>
            <img src={props.item_data.item_img_url}/>
            <div className={s.info}>
                <h4>{props.item_data.item_name}</h4>
                <p>{props.item_data.item_price}</p>
                <p>{props.item_data.views_count} views</p>
                <button onClick={onAddItem}>Add to wishlist</button>
            </div>
        </div>
    )
}

export default ItemPage