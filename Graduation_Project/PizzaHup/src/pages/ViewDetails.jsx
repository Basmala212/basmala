import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        if (res.data && res.data.recipe) {
          setProduct(res.data.recipe);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="container mt-5 pt-5 text-danger">{error}</div>;
  }

  if (!product) {
    return <div className="container mt-5 pt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5 pt-5">
      <h2>{product.title}</h2>
      <img
        src={product.image_url}
        alt={product.title}
        className="img-fluid mb-3"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <h4>Ingredients:</h4>
      <ul>
        {product.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewDetails;
