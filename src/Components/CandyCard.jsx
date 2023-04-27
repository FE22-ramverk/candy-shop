import { useDispatch } from "react-redux";
import Button from "./Button";
import { buyCandy } from "../actions/candyActions";
import style from "./CandyCard.module.scss";

function CandyCard({ candy }) {
    const dispatch = useDispatch();

    function addCandyToCart() {
        // dispatcha actionen buyCandy
        dispatch(buyCandy(candy))
    }

    function navigateToCandyInfo() {
        console.log(candy);
    }

    return (
        <article className={style.card}>
            <img className={style.image} src={"/imgs/candy-" + candy.id + ".png"} alt="klubba" />
            <section className={style.firstrow}>
                <h3>{candy.name}</h3>
                <p>{candy.price}:-</p>
            </section>
            <section className={style.secondrow}>
                <Button title="Info" action={navigateToCandyInfo} />
                <Button title="+" action={addCandyToCart} />
            </section>
        </article>

    );
}

export default CandyCard;