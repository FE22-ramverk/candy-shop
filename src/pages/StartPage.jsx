import { useSelector } from 'react-redux';
import CandyCard from '../Components/CandyCard';
import { useEffect, useState } from 'react';
import style from "./StartPage.module.scss";

function StartPage() {
    const [candies, setCandies] = useState([]);
    const [searchInput, setSearchInput] = useState();
    const [candiesFromStore, setCandiesFromStore] = useState([]);
    // hämta godis från storen
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        setCandies(state.candies);
        setCandiesFromStore(state.candies);
    }, [state]);

    function handleSearch() {
        setCandies(candiesFromStore);
        let candiesCopy = [...candiesFromStore];
        let filteredCandies = candiesCopy.filter((candy) => candy.name.includes(searchInput));
        setCandies(filteredCandies);
    };
    return (
        <main>
            <section className={style.searchInput}>
                <span></span>
                <input placeholder="Search candy..." onChange={(e) => setSearchInput(e.target.value)}></input>
                <figure><img onClick={handleSearch} src='./imgs/lollipop.png' height='27px' width="27px" /></figure>
            </section>
            <section className={style.candyCards}>
                {
                    candies &&
                    candies.map((candy) => <CandyCard key={candy.id} candy={candy} />)
                }
            </section>
            <img className={style.hero} src='./imgs/candy-shop.png' />
        </main>
    );
}

export default StartPage;