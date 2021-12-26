import s from './Wishlist.module.css'
import WishItem from "./WishItem/WishItem";

const Wishlist = (props) => {
    let wish_items =
      props.wish_items_data.map((i) => {
          return (
            <WishItem id={i.id}
                      key={i.item_name + i.item_price}
                      item_name={i.item_name}
                      item_price={i.item_price}
                      add_date={i.add_date}
                      removeItem={props.removeItem}
                      increaseViews={props.increaseViews}/>
          )
      })


  return (
    <div className={s.wishlist}>
      {props.wish_items_data.length ?
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.item_name}>
              <p>Name</p>
            </div>
            <div className={s.item_price}>
              <p>Price</p>
            </div>
            <div className={s.item_add_date}>
              <p>Date</p>
            </div>
            <div className={s.item_remove}>
              <p>Remove item</p>
            </div>
          </li>
          {wish_items}
        </ul>
        :
        <h3 className={s.no_match}>your wishlist is empty</h3>
      }
    </div>
  )

}

export default Wishlist