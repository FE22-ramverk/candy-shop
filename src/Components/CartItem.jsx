import React from 'react'
import { useDispatch } from 'react-redux';
import { buyCandy, manuallySetAmount, removeCandy } from '../actions/candyActions';
import style from "./CartItem.module.scss";

export default function CartItem({ cartItem }) {
    const dispatch = useDispatch();
    return (
        <article className={style.container}>
            <section className={style.itemImage}></section>
            <div className={style.wrapper}>
                <section className={style.info}>
                    <h3>{cartItem.name}</h3>
                </section>
                <section className={style.buttons}>
                    <button onClick={() => dispatch(removeCandy(cartItem))}>-</button>
                    <input placeholder={cartItem.amount} onBlur={(e) => dispatch(manuallySetAmount(cartItem, e.target.value))} />
                    <button onClick={() => dispatch(buyCandy(cartItem))}>+</button>
                </section>
            </div>
        </article>
    )
}
