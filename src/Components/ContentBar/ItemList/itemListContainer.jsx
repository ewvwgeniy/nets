import ItemList from "./ItemList";
import {increaseItemViewsAC, searchRowTextChangeActionCreator} from "../../../Redux/itemsAndSearchReducer";
import {addToWishlistActionCreator} from "../../../Redux/wishItemsDataReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    let items_data
    if (window.location.pathname === '/product') {
        items_data = state.items_and_search.items_data
    } else if (window.location.pathname === '/product/search') {
        items_data = state.items_and_search.search_info.search_items_data
    }
    return {
        items_data: items_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRowTextDefault: () => {
            dispatch(searchRowTextChangeActionCreator(''))
        },
        addItem: (item) => {
            dispatch(addToWishlistActionCreator(item))
        },
        increaseViews: (id) => {
            dispatch(increaseItemViewsAC(id))
        }
    }
}

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)

export default ItemListContainer