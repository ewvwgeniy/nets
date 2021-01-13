const ADD_TO_WISHLIST = 'ADD-TO-WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE-FROM-WISHLIST'

let wish_items_data = [
    {wish_id: 1, id: 1, item_name: 'Samsung Note 7 64 Gb', item_price: '799.99 $', add_date: '10-11-2020 01:43'},
    {wish_id: 2, id: 2, item_name: 'Xiaomi Redmi 6 512 Gb', item_price: '569.99 $', add_date: '10-11-2020 01:43'},
    {wish_id: 3, id: 3, item_name: 'Samsung Galaxy S20 128 GB', item_price: '929.99 $', add_date: '10-11-2020 01:43'},
    {wish_id: 4, id: 4, item_name: 'Iphone 4 128 GB', item_price: '479.99 $', add_date: '10-11-2020 01:43'},
    {wish_id: 5, id: 5, item_name: 'Huawei Pro 9', item_price: '794.99 $', add_date: '10-11-2020 01:43'}
]

const wishItemsDataReducer = (state = wish_items_data, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            let state_copy = [...state]

            let now = new Date()
            let wish_id
            if (state_copy.length === 0) wish_id = 1
            else wish_id = state_copy[state_copy.length - 1].wish_id + 1
            let wishItem = {
                wish_id: wish_id,
                id: action.item.id,
                item_name: action.item.item_name,
                item_price: action.item.item_price,
                add_date: `${(now.getDate() < 10) ? '0' + now.getDate() : now.getDate()}-${(now.getMonth() < 9) ? '0' `${now.getMonth() + 1}` : now.getMonth() + 1}-${now.getFullYear()} ${(now.getHours() < 10) ? '0' + now.getHours() : now.getHours()}:${(now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes()}`
            }
            state_copy.push(wishItem)
            return state_copy
        }
        case REMOVE_FROM_WISHLIST: {
            let state_copy = [...state]
            let item_index
            state_copy.forEach((element, index) => {
                if (element.id === action.id) item_index = index
            })
            state_copy.splice(item_index, 1)
            return state_copy
        }
        default:
            return state
    }
}

export const addToWishlistActionCreator = (item) => ({type: ADD_TO_WISHLIST, item: item})
export const removeFromWishlistActionCreator = (id) => ({type: REMOVE_FROM_WISHLIST, id: id})

export default wishItemsDataReducer