import Sl from "../Sl/Sl";



export default function Home({products, setProducts }) {
	return (
		<>
		<Sl products={products} setProducts={setProducts}/>
		</>
	)
}