// src/components/RecipeCard.jsx
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={recipe.image_url} className="card-img-top" alt={recipe.title} />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">By: {recipe.publisher}</p>
          <Link to={`/details/${recipe.recipe_id}`} className="btn btn-warning w-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
