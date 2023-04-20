import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CandyInfo() {
    const [candy, setCandy] = useState();
    const params = useParams();
    // hämta godis från store
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        // matcha param.id med godis-id't
        let candyMatch = state.candies.find((c) => c.id == params.id);
        setCandy(candyMatch);
    }, [state])
    return (
        <main>
            {candy &&
                <>
                <h2>{candy.name}</h2>
                <p>{candy.price}SEK</p>
                <p>{candy.name}</p>
                </>
            }
        </main>
    );
}

export default CandyInfo;