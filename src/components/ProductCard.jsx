import { useState } from "react";

const ProductCard = ({ name, price, image, rating }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="ribbon"></div>

      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="price-rating">
          <span className="price">${price}</span>
          <span className="stars">
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
          </span>
        </div>
      </div>

      <button className="add-btn" onClick={handleAdd}>
        {added ? "Added ✓" : "ADD TO CART"}
      </button>
    </div>
  );
};

export default ProductCard;