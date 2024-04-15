import { useParams } from "react-router-dom";

export default function CardPage({products, setProducts}){

	const{id} = useParams();
	console.log(id)
	const prod = products.find(prod => prod.id == parseInt(id))
	console.log(prod)
	return(
		<>
		<h1>{prod.name}</h1>
		<p>{prod.price}</p>
		</>
	)
}