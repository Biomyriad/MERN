import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetail(props) {

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(res => navigate("/"))
    .catch(err => console.log(err))
  }

  useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${id}`)
          .then((res) => {
              console.log(res.data);
              setProduct(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  }, [id]);

  return (
    <div className="mx-auto mt-3 w-25">
      <ul className="list-unstyled">
        <li><span className="fw-bold">Product ID:</span> {product._id}</li>
        <li><span className="fw-bold">Product Title:</span> {product.title}</li>
        <li><span className="fw-bold">Product Price:</span> {product.price}</li>
        <li><span className="fw-bold">Product Description:</span> {product.description}</li>
      </ul>
     
      <div className="d-flex justify-content-end mt-3">
          <button className="me-2" onClick={() => deleteProduct()}>Delete</button>
          <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  )
}
