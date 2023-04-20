function CandyCard({candy}) {
    return ( 
        <article className="card">
            {/* <img className="card__image" src="/imgs/candy-1.png" alt="klubba" width="200px" height="200px" /> */}
            <section className="card__info--firstrow">
                <h3>{candy.name}</h3>
                <p>{candy.price}</p>
            </section>
            {/* <section className="card__info--secondrow">
                {/* <button>+</button>
            </section> */}
        </article>
     );
}

export default CandyCard;