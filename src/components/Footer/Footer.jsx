import './Footer.css'
import logo from '/header/full-logo.png'
import basket from '/header/basket.svg'
import favorites from '/header/favorites.svg'
import user from '/header/user.svg'
import {Link} from 'react-router-dom'


export default function Footer(){
    return(
        <footer className="footer">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className="nav">
                <Link to="/">Главная</Link>
                <Link to="/">Каталог</Link>      
            </nav>
            <div className="icons">
                <a href=""><img src={basket} alt="" /></a>
                <a href=""><img src={favorites} alt="" /></a>
                <a href=""><img src={user} alt="" /></a>
            </div>
        </footer>
    )
}