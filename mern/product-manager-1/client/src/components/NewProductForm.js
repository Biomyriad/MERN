import {useState, useEffect} from 'react'
import axios from 'axios'

export default function NewProductForm() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/product", 
    {
      title: title,
      price: price,
      description: description
    })
      .then(response=>console.log(response))
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
