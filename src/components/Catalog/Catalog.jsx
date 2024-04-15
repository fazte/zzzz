import Card from '../Card/Card'
import './Catalog.css'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'

export default function Catalog({addToBasket,basket,products, setProducts}) {

	const [query, setQuery] = useState("")
	const [sorting, setSorting] = useState("")

	function search(e) {
		setQuery(e.target.value)
	}
	const filterdProducts = products.filter(
		(item) => item.name.toLowerCase().includes(query.toLowerCase())
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
		<div className="dna">
			<input className='inp' onChange={search} type="search" name="search" placeholder="Поиск" />
			<select className='sel' onChange={sort}>
				<option value="price_asc">По возрастанию</option>
				<option value="price_desc">По убыванию</option>
			</select>
		</div>
			

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
