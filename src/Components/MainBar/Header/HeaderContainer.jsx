import Header from "./Header";
import {connect} from "react-redux";
import {searchRowTextChangeActionCreator} from "../../../Redux/itemsAndSearchReducer";

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRowTextDefault: () => {
            dispatch(searchRowTextChangeActionCreator(''))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer