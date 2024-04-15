import { Link } from "react-router-dom";

export default function Basket({basket}){

	const cardProducts = basket.map(id => catalog.find(item => item.id == id))
	const summa = cardProducts.reduce((summ,item) => summ + item.price,0)

	return(
		<>
		<h1>Корзина</h1>
		{
			cardProducts.map( product =>
			<div key={product.id} className="card">
				<h3>{product.name}</h3>
				<i>{product.price} ₽</i><br /><br />
				<Link to={`${product.id}`}>Подробнее</Link>
				<hr />
			</div>
			)
		}
		<h3>Итого {summa} рублей </h3>
		</>
	)

}