import {useState} from 'react'
import axios from 'axios'

export default function NewProductForm(props) {

  const [products, setProducts] = props.products;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products", 
    {
      title: title,
      price: price,
      description: description
    })
      .then(response => {
        console.log(products);
        setProducts([...products, response.data]);
        console.log(products);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form>
        <input placeholder='Title' onChange={ (e) => setTitle(e.target.value) }/>
        <input placeholder='Price' onChange={ (e) => setPrice(e.target.value) }/>
        <input placeholder='Description' onChange={ (e) => setDescription(e.target.value) }/>
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}
