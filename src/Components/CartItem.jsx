import React from 'react'
import style from "./CartItem.module.scss";

export default function CartItem({cartItem}) {
  return (
    <article className={style.container}>
        <section className={style.itemImage}></section>
        <section className={style.info}>
            <h3>{cartItem.name}</h3>
        </section>
    </article>
  )
}
