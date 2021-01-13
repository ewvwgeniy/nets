import React from 'react'
import s from './ItemList.module.css'
import Item from "./Item/Item";

const ItemList = (props) => {
    let items
    if (props.items_data.length === 0) {
        items = <h3 className={s.no_match}>по вашему запросу ничего не найдено</h3>
    } else {
        items = [...props.items_data]
        items = items.sort((a, b) => b.views_count - a.views_count)
        items = items.map(i => <Item item_data={i}
                             searchRowTextDefault={props.searchRowTextDefault}
                             addItem={props.addItem}
                             increaseViews={props.increaseViews}/>)
    }

    return (
        <div>
            <ul className={s.list}>
                {items}
            </ul>
        </div>
    );
}

export default ItemList