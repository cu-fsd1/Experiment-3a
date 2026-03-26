import ProductCard from "./components/ProductCard";
import shoe from "./assets/shoe.png";
import "./index.css";

function App() {

  const products = [
    {
      name: "Running Shoes",
      price: 20,
      rating: 4,
      image: shoe
    },
    {
      name: "Basketball Shoes",
      price: 35,
      rating: 5,
      image: shoe
    },
    {
      name: "Casual Sneakers",
      price: 25,
      rating: 3,
      image: shoe
    },
    {
      name: "Sport Trainers",
      price: 40,
      rating: 4,
      image: shoe
    }
  ];

  return (
    <div className="container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;