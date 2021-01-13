import PagesToRoute from "./PagesToRoute";
import {connect} from "react-redux";
import {addToWishlistActionCreator} from "../../../Redux/wishItemsDataReducer";

const mapStateToProps = (state) => {
    return {
        items_data: state.items_and_search.items_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => {
            dispatch(addToWishlistActionCreator(item))
        }
    }
}


const PagesToRouteContainer = connect(mapStateToProps, mapDispatchToProps)(PagesToRoute)

export default PagesToRouteContainer