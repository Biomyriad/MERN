import {useState} from 'react'
import NewProductForm from '../components/NewProductForm';
import ProductList from '../components/ProductList';

export default function Products() {

  const productsArr = useState([{title: "empty"}])
  //const [products, setProducts] = productsArr

  return (
    <div>
      <h1 className='mx-auto' style={{width: "24%"}}>Product Manager</h1>
      <NewProductForm products={productsArr}/>
      <hr></hr>
      <ProductList products={productsArr}/>
    </div>
  )
}
