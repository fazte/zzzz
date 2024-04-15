import './App.css'
import Header from './components/Header/Header'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardPage from './components/CardPage/CardPage'
import Sl from './components/Sl/Sl'
import Home from './components/Home/Home'

function App() {

	const[basket,setBasket] = useState([])
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await fetch("https://reactapi.pautinaweb.ru/objects.php")
    const products = await response.json()
    setProducts(products);
  }
  useEffect(() => {
    getProducts()
  }, [])

  console.log(basket)
	
  return (
    <>
      <Header addToBasket={setBasket} basket={basket}/>
        <Routes>
          <Route path="/" element={<Home products={products} setProducts={setProducts}/>}/>
          <Route path="/catalog" element={<Catalog addToBasket={setBasket} basket={basket} products={products} setProducts={setProducts}/>}/>
					<Route path="/catalog/:id" element={<CardPage products={products} setProducts={setProducts}/>}/>
					<Route path="/basket" />
				</Routes>
        
      <Footer/>
    </>
  )
}

export default App
