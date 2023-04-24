import { useDispatch } from "react-redux";
import Button from "./Button";
import { buyCandy } from "../actions/candyActions";
import { Link } from "react-router-dom";
import style from './CandyCard.module.scss';

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
            <Link to={"/candyinfo/" + candy.id}>
                <img className="card__image" src={"/imgs/candy-" + candy.id + ".png"} alt="klubba" width="200px" height="200px" />
            </Link>
            <section className={style.firstrow}>
                <h3>{candy.name}</h3>
                <p>{candy.price}SEK</p>
            </section>
            <section className={style.secondrow}>
                <Button title="+" action={addCandyToCart} />
            </section>
        </article>

    );
}

export default CandyCard;