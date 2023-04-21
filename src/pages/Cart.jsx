import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
    const [cart, setCart] = useState([]);
    const state = useSelector((state) => state);

    useEffect(() => {
        setCart(state.cart);
    }, [state]);

    return (
        <main>
            <p>CART</p>
            {
                cart && cart.map((cartItem) =>
                    <p>{cartItem.name}</p>)
            }
        </main>
    );
}

export default Cart;