import { useSelector } from 'react-redux';
import CandyCard from '../Components/CandyCard';
import { useEffect, useState } from 'react';

function StartPage() {
    const [candies, setCandies] = useState([]);
    const [candiesFromStore, setCandiesFromStore] = useState([]);
    // hämta godis från storen
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        setCandies(state.candies);
        setCandiesFromStore(state.candies);
    }, [state]);

    function handleSearchInput(input) {
        setCandies(candiesFromStore);
        let candiesCopy = [...candiesFromStore];
        let filteredCandies = candiesCopy.filter((candy) => candy.name.includes(input));
        setCandies(filteredCandies);
    };
    return (
        <main>
            <section>
                <label>SÖK</label>
                <input onChange={(e) => handleSearchInput(e.target.value)}></input>
            </section>
            {
                candies &&
                candies.map((candy) => <CandyCard key={candy.id} candy={candy} />)
            }
        </main>
    );
}

export default StartPage;