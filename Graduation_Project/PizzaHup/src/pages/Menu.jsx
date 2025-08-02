import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
        setRecipes(res.data.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.recipe_id}>
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Publisher: {recipe.publisher}</p>
                <p className="card-text fw-bold text-success">
                  Price: ${Math.floor(Math.random() * 10) + 10}.99
                </p>
                <div className="mt-auto d-flex justify-content-between">
                  <Link to={`/details/${recipe.recipe_id}`} className="btn btn-sm btn-outline-dark">
                    View Details
                  </Link>
                  <Link
                    to={`/order?item=${encodeURIComponent(recipe.title)}`}
                    className="btn btn-add-to-cart"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
