import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function ProductList(props) {

  const navigate = useNavigate();
  const [products, setProducts] = props.products

  const removeFromProductList = productId => {
    setProducts(products.filter(product => product._id !== productId));
  }

  const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
    .then(res => {
      removeFromProductList(productId)
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(response=> setProducts(response.data))
    .catch(err => console.log(err))
  }, [products]);

  return (
    <div className='d-flex flex-column align-items-end p-2 mx-auto' style={{width: "500px"}}>
    
      {
        products.map((obj, index) => 
        <div className='d-flex justify-content-between w-100 mb-1' key={index}>
          <div className=''>
            <Link className='w-100 text-decoration-none text-dark' to={'/' + obj._id} key={obj.title}>{obj.title}</Link>
          </div>
          <div className=''>
            <button onClick={() => navigate('/' + obj._id)}>View</button>
            <button onClick={() => navigate('edit/' + obj._id)}>Edit</button>
            <button onClick={() => deleteProduct(obj._id)}>Delete</button>            
          </div>
        </div>
      )}        

    </div>
  )
}
