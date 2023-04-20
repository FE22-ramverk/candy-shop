import { candyStore } from "../store/candyStore";

const candyReducer = (state = candyStore, action) => {
    switch (action.type) {
        case "BUY_CANDY":
            // då vill vi returnera det nya statet efter att vi har utfört vad kunden vill
            return {
                ...state,
                cart: [...state.cart, action.payload]
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