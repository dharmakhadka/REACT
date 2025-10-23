import { useState } from "react";

const App = () => {
  const products = [
    { name: "Apple", category: "fruit" },
    { name: "Mango", category: "fruit" },
    { name: "Onion", category: "vegetable" },
    { name: "Apple", category: "fruit" },
    { name: "Tomato", category: "vegetable" }
  ]
  const[category,setCategory] = useState("All");
  const filterProduct = category==="All" ? products : products.filter((product) => (product.category)===category) 

  return(
    <div>

      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("fruit")}>Fruit</button>
      <button onClick={() => setCategory("vegetable")}>Vegetable</button>

    <ul>
    {filterProduct.map((product, index) => (
      <li key={index}>{product.name}-{product.category}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;
