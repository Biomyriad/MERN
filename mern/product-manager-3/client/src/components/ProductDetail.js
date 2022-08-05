import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetail(props) {

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

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
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
