import logo from '/header/full-logo.png'
import basket from '/header/basket.svg'
import favorites from '/header/favorites.svg'
import user from '/header/user.svg'
import './Header.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modalka from '../Modalka/Modalka'

export default function Header({basket}){
	// const [modalIsOpen, setModalIsOpen] = useState(false)
	
    return(
        <header className="header">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className="nav">
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог</Link>
				<Modalka basket={basket} />               
            </nav>
            <div className="icons">
                <a href=""><img src={basket} alt="" /></a>
                <a href=""><img src={favorites} alt="" /></a>
                <a href=""><img src={user} alt="" /></a>
            </div>
        </header>
    )
}