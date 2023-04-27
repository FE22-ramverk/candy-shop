import CartIcon from "./CartIcon";
import style from "./Header.module.scss";

function Header() {
    return ( 
        <header className={style.header}>
            <h1>CANDY SHOP</h1>
            <CartIcon />
        </header>
     );
}

export default Header;