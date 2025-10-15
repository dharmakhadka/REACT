import Welcome from "./Welcome";
import Product from "./Product";
import Student from "./Student";

function App(){
  return(
    <div>
    <Product title="Bag" price="Rs1000" description="Made In Nepal"></Product>
    <Product title="Laptop" price="Rs10000" description="Made In Chine"></Product>
    <Product title="Rolex_Watch" price="Rs4000" description="Made In Nepal"></Product>
    <Product title="Bag" price="Rs1000" description="Made In Nepal"></Product>
    <Student name="Ram" grade="A" remarks="Good"></Student>
    <Student name="Hari" grade="A+" remarks="Excellent"></Student>
    <Student name="Shyam" grade="B" remarks="Okay"></Student>
    </div>
  );
}

export default App;
