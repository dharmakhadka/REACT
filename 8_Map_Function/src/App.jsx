const App = () => {
  const products = ["rice","dal","spices"];
  return(
    <div>
      <ul>
        {products.map((product,index)=>(
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;