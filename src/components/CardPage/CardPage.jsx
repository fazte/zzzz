import { useParams } from "react-router-dom";

export default function CardPage(products, setProducts){

	const{id} = useParams();
	console.log(id)
	const product = catalog.find(product => product.id == parseInt(id))
	console.log(product)
	return(
		<>
		<h1>{product.name}</h1>
		<p>{product.price}</p>
		</>
	)
}