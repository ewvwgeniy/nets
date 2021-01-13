import React from 'react'
import s from './ToolBar.module.css'
import {NavLink} from "react-router-dom";

const ToolBar = (props) => {
    let searchText = React.createRef()
    let addButtonBoolean = false
    let onSearchTextChange = () => {
        props.searchTextChange(searchText.current.value)
    }
    let onEnterClick = (e) => {
        if (e.charCode === 13) {
            props.onSearchClick()
        }
    }
    let addItem = () => {
        let item
        props.search_items_data.forEach(el => {
            if (el.item_name === props.search_row_text)
                item = el
        })
        props.addToWishlist(item)
    }
    let textIsOption = () => {
        addButtonBoolean = false
        props.search_items_data.forEach(el => {
            if (el.item_name === props.search_row_text)
                addButtonBoolean = true
        })
        return addButtonBoolean
    }

    let options = props.search_items_data.map((el) => <option  value={el.item_name}>{el.item_name}</option>)


    return (
        <div className={s.toolbar}>
            <div className={s.search}>
                <input type="text"
                       placeholder='what i can find 4u'
                       list='options'
                       ref={searchText}
                       onChange={onSearchTextChange}
                       onKeyPress={onEnterClick}
                       value={props.search_row_text}/>
                <datalist id='options'>
                    {options}
                </datalist>
                <NavLink to='/product/search'>
                    <button onClick={props.onSearchClick} className={s.button}>Search</button>
                </NavLink>
                {
                    textIsOption() &&
                    <button onClick={addItem} className={s.button}>Add to wishlist</button>
                }
            </div>
            <div className={s.pages}>
                <NavLink to="/product" activeClassName={s.active}><span
                    onClick={props.searchRowTextDefault}>itemlist</span></NavLink>
                <br/>
                <NavLink to="/wishlist" activeClassName={s.active}><span onClick={props.searchRowTextDefault}>wishlist</span></NavLink>
            </div>
        </div>

    )
}

export default ToolBar
