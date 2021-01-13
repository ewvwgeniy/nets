import {combineReducers, createStore} from "redux";
import itemsAndSearchReducer from "./itemsAndSearchReducer";
import wishItemsDataReducer from "./wishItemsDataReducer";

let reducers = combineReducers({
    items_and_search: itemsAndSearchReducer,
    wish_items_data: wishItemsDataReducer
})

let store = createStore(reducers)
//window.store = store

export default store