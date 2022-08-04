import {useState} from 'react'
import NewProductForm from '../components/NewProductForm';
import ProductList from '../components/ProductList';

export default function Products() {

  const productsArr = useState([{title: "empty"}])
  const [products, setProducts] = productsArr

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <NewProductForm products={productsArr}/>
      <hr></hr>
      <ProductList products={productsArr}/>
    </div>
  )
}
