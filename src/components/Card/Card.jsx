import Button from '../Button/Button'
import product from '/card/product.jpg'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({name,price,id,addCard}){
    // alert(price)
    return(
        <div className="catalog_item">
            <img src={product} alt="" />
            <div className="car_title">
                {name}
            </div>
            <div className="card_price">
                {price}
            </div>
						<button onClick={addCard}>В корзину 2</button>
						<Link to={`${id}`}>Подробнее</Link>
        </div>
    )
}



