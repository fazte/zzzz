import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Link } from "react-router-dom";
import Basket from '../Basket/Basket'

export default function Modalka({ addToBasket, basket, showca, products, setProducts }) {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const cardProducts = basket.map(id => products.find(item => item.id == id))
	const summa = cardProducts.reduce((summ,item) => summ + item.price,0)

	function showModal() {
		setModalIsOpen(true)
	}

	function closeModal() {
		setModalIsOpen(false)
	}
	useEffect(() => {
		Modal.setAppElement('body')
	}, [])
	return (
		<>
			<button onClick={showModal}>Добавить</button>
			<Modal isOpen={modalIsOpen}>
				<div className="">
					<h1>Корзина</h1>
					{
						cardProducts.map(product =>
							<div key={product.id} className="card">
								<h3>{product.name}</h3>
								<i>{product.price} ₽</i><br /><br />
								<Link to={`${product.id}`}>Подробнее</Link>
								<hr />
							</div>
						)
					}
					<h3>Итого {summa} рублей </h3>
					<button onClick={closeModal}>Закрыть</button>
				</div>
			</Modal>
		</>
	)
}