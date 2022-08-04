import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function ProductList(props) {

  const [products, setProducts] = props.products

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(response=>{setProducts(response.data)})
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <ul>
        {
          products.map((obj, index) => <li><Link to={'/' + obj._id} key={obj.title}>{obj.title}</Link></li>)
        }        
      </ul>
    </div>
  )
}
