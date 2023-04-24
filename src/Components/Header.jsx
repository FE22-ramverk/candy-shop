import { Link } from "react-router-dom";
import style from "./Header.module.scss";

function Header() {
    return ( 
        <header className={style.header}>
            <h1>HEADER</h1>
            <Link to="/cart" className={style.link}>
                <img src="/imgs/shopping-cart.svg" width="25px" height="25px" />
            </Link>
        </header>
     );
}

export default Header;