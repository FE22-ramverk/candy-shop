import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    return ( 
        <header className={styles.header}>
            <span></span>
            <h1>CANDYSHOP</h1>
            <Link to="/cart">
                <img src="/imgs/shopping-cart.svg" width="25px" height="25px" />
            </Link>
        </header>
     );
}

export default Header;