import { useParams } from "react-router-dom";
import product from '/card/product.png'
import './CardPage.css'

export default function CardPage({products, setProducts}){

	const{id} = useParams();
	console.log(id)
	const prod = products.find(prod => prod.id == parseInt(id))
	console.log(prod)
	return(
		<>
		<img className="bbb" src={product} alt="" />
		<h1>{prod.name}</h1>
		<p>{prod.price}₽</p>
		
		</>
	)
}