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
        setProducts([...products, response.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form className='row w-25 mx-auto'>
        <input placeholder='Title' value={title} onChange={ (e) => setTitle(e.target.value) }/>
        <input placeholder='Price' value={price} onChange={ (e) => setPrice(e.target.value) }/>
        <input placeholder='Description' value={description} onChange={ (e) => setDescription(e.target.value) }/>
        <button className='mt-2' onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}
