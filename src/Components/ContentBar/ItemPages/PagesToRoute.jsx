import ItemPage from "./ItemPage";
import {Route} from "react-router-dom";


const PagesToRoute = (props) => {
    let pagesToRoute = props.items_data.map((current_item) => {
        let path = '/product/' + current_item.id
        return (
            <Route exact path={path} key={current_item.item_name + current_item.item_price} render={() =>
                <ItemPage item_data={current_item} addItem={props.addItem}/>
            }/>
        )
    })
    return (
        <div>
            {pagesToRoute}
        </div>
    )
}

export default PagesToRoute