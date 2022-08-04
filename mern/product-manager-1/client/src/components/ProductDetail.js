import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail(props) {

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
    <div>
      <ul>
        <li>Product ID: {product._id}</li>
        <li>Product Title: {product.title}</li>
        <li>Product Price: {product.price}</li>
        <li>Product Description: {product.description}</li>
      </ul>
    </div>
  )
}
