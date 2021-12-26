import './App.css';
import {Redirect, Route} from "react-router-dom";
import WishlistContainer from "./Components/ContentBar/Wishlist/WishListContainer";
import ItemListContainer from "./Components/ContentBar/ItemList/itemListContainer";
import ToolBarContainer from "./Components/MainBar/ToolBar/ToolBarContainer";
import HeaderContainer from "./Components/MainBar/Header/HeaderContainer";
// import PagesToRouteContainer from "./Components/ContentBar/ItemPages/PagesToRouteContainer";
import {useEffect} from "react";
import {setPhoneshAC} from "./Redux/itemsAndSearchReducer";
import store from "./Redux/reduxStore";

const App = () => {
  useEffect(() => {
    store.dispatch(setPhoneshAC())
  }, [])

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <ToolBarContainer />
            <div className='app-wrapper-content'>
                <Route exact path="/" render={() => (
                    <Redirect to="/product"/>
                )}/>
                <Route exact path='/wishlist' render={() =>
                    <WishlistContainer />
                }/>
                <Route exact path='/product' render={() =>
                    <ItemListContainer />
                }/>
                <Route exact path='/product/search' render={() =>
                    <ItemListContainer />
                }/>
                {/*<PagesToRouteContainer/>*/}
            </div>
        </div>
    );
}

export default App;