import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import { buyCandy } from "../actions/candyActions";

function CandyInfo() {
    const [candy, setCandy] = useState();
    const params = useParams();
    const dispatch = useDispatch();
    // hämta godis från store
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        // matcha param.id med godis-id't
        let candyMatch = state.candies.find((c) => c.id == params.id);
        setCandy(candyMatch);
    }, [state]);

    function addCandyToCart() {
        console.log(candy);
        // dispatcha actionen buyCandy
        dispatch(buyCandy(candy))
    };
    
    return (
        <main>
            {candy &&
                <>
                    <img className="card__image" src={"/imgs/candy-" + candy.id + ".png"} alt="klubba" width="200px" height="200px" />
                    <h2>{candy.name}</h2>
                    <p>{candy.price}SEK</p>
                    <p>{candy.name}</p>
                    <Button title="ADD TO CART" action={addCandyToCart} />
                </>
            }
        </main>
    );
}

export default CandyInfo;