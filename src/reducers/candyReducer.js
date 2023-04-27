import { candyStore } from "../store/candyStore";

const candyReducer = (state = candyStore, action) => {
    let cart = [...state.cart];
    switch (action.type) {
        case "BUY_CANDY":
            // då vill vi returnera det nya statet efter att vi har utfört vad kunden vill
            let candyToAdd = action.payload;
            let objIndex = cart.findIndex((cartItem => cartItem.id === candyToAdd.id));
            if (objIndex > -1) {
                console.log('finns');
                // om varan redan finns i korgen vill vi plussa på antalet
                cart[objIndex].amount += 1;
            } else {
                candyToAdd.amount = 1
                console.log(candyToAdd);
                cart.push(candyToAdd)
            }
            return {
                ...state,
                cart: [...cart]
            }
        case "REMOVE_CANDY":
            let candyToRemove = action.payload;
            let index = cart.findIndex((cartItem) => cartItem.id === candyToRemove.id)
            cart.splice(index, 1);
            return {
                ...state,
                cart: [...cart]
            }
        case "FILL_STOCK":
            return {
                ...state,
                candies: [...action.payload]
            }
        default:
            return state
    }
}
export default candyReducer;