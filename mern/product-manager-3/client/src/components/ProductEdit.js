import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductEdit() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`, { 
            title: title,
            price: price,
            description: description,
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => console.log(err));
};

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then((response) => {
            console.log(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <div className='mx-auto mt-4' style={{width: "500px"}}>
      <form onSubmit={(e) => submit(e)}>
        <div className='row'>
          <div className='col'>
            <label htmlFor="title">Product Title:</label>
          </div>
          <div className='col'>
            <input className='w-100' id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>        
        </div>

        <div className='row'>
          <div className='col'>
            <label htmlFor="price">Product Price:</label>
          </div>
          <div className='col'>
            <input className='w-100' id="price" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>        
        </div>

        <div className='row'>
          <div className='col'>
            <label htmlFor="description">Product Description:</label>
          </div>
          <div className='col'>
            <input className='w-100' id="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>        
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="me-2" onClick={() => navigate(-1)}>Save</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
