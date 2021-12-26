import {onSearchAC, searchRowTextChangeActionCreator} from "../../../Redux/itemsAndSearchReducer";
import ToolBar from "./ToolBar";
import {connect} from "react-redux";
import {addToWishlistActionCreator} from "../../../Redux/wishItemsDataReducer";

const mapStateToProps = (state) => {
    let search_items_data = [...state.items_and_search.search_info.search_items_data]
    search_items_data = search_items_data.sort((a, b) => b.views_count - a.views_count)
    if (search_items_data.length > 5) search_items_data.length = 5

    return {
        search_row_text: state.items_and_search.search_info.search_row_text,
        search_items_data: search_items_data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchTextChange: (text) => {
            dispatch(searchRowTextChangeActionCreator(text))
        },
        onSearchClick: () => {
            dispatch(onSearchAC())
        },
        addToWishlist: (id) => {
            dispatch(addToWishlistActionCreator(id))
        }
    }
}

const ToolBarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolBar)

export default ToolBarContainer
