import {removeFromWishlistActionCreator} from "../../../Redux/wishItemsDataReducer";
import Wishlist from "./Wishlist";
import {connect} from "react-redux";
import {increaseItemViewsAC} from "../../../Redux/itemsAndSearchReducer";

const mapStateToProps = (state) => {
    return {
        wish_items_data: state.wish_items_data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeFromWishlistActionCreator(id))
        },
        increaseViews: (id) => {
            dispatch(increaseItemViewsAC(id))
        }
    }
}

const WishlistContainer = connect(mapStateToProps, mapDispatchToProps)(Wishlist)

export default WishlistContainer