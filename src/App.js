import './App.css';
import {Route} from "react-router-dom";
import WishlistContainer from "./Components/ContentBar/Wishlist/WishListContainer";
import React from "react";
import ItemListContainer from "./Components/ContentBar/ItemList/itemListContainer";
import ToolBarContainer from "./Components/MainBar/ToolBar/ToolBarContainer";
import HeaderContainer from "./Components/MainBar/Header/HeaderContainer";
import PagesToRouteContainer from "./Components/ContentBar/ItemPages/PagesToRouteContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <ToolBarContainer />
            <div className='app-wrapper-content'>
                <Route path='/wishlist' render={() =>
                    <WishlistContainer />
                }/>
                <Route exact path='/product' render={() =>
                    <ItemListContainer />
                }/>
                <Route exact path='/product/search' render={() =>
                    <ItemListContainer />
                }/>
                <PagesToRouteContainer/>
            </div>
        </div>
    );
}

export default App;
