import Card from '../Card/Card'
import './Catalog.css'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'

export default function Catalog({addToBasket,basket,products, setProducts}) {

	const [query, setQuery] = useState("")
	const [sorting, setSorting] = useState("")
	const [category,setCategory] = useState("0")

	function search(e) {
		setQuery(e.target.value)
	}
	const filterdProducts = products.filter(
		(item) => item.name.toLowerCase().includes(query.toLowerCase())
		&&
		(item.category == category || category == 0)
	)


	function sort(event) {
		const sortValue = event.target.value
		setSorting(sortValue);
	}

	const sortProducts = (sorting, products) => {
		switch(sorting) {
			case 'price_asc':
				return [...products].sort((a,b) => a.price - b.price);
			case 'price_desc':
				return [...products].sort((a,b) => b.price - a.price);
			default:
				return products
		}
		
	}

	const sortAndFilterProducts = sortProducts(sorting,filterdProducts);
	console.log(sortAndFilterProducts);
	return (
		<>
			<input onChange={search} type="search" name="search" placeholder="Touck" />
			<select onChange={sort}>
				<option value="price_asc">Mo Bo3pocTaHuK LeHb</option>
				<option value="price_desc">Mo y6biBaHuw LeHbi</option>
			</select>
			<hr />
				<button onClick={()=>setCategory(0)}>Все категории</button>
				<button onClick={()=>setCategory(1)}>Смартфоны</button>
				<button onClick={()=>setCategory(2)}>Планшеты</button>
			<hr />
		
			<div className="catalog_list">
				{
					sortAndFilterProducts.length ?
						sortAndFilterProducts.map((card,index) => {
							return(
								<Card key={index} 
								{...card} 
								addCard={
									() => addToBasket([...basket,card.id])
								}
								
								/>
							);
						})
						: 
						<h2>Mo 3anpocy "{query}" Hu4ero He HaiigeHo</h2>
				}
			</div>
		</>
	)
}
