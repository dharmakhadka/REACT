const { useState } = require("react")

const App = () => {
  const [show,setShow] = useState(false);
  
  return(
    <div>
      <p>This is a paragraph</p>;
      <button onClick={() => setShow(!show)}>{show ? "Read Less":"Read More"}</button>
      {show && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, aut!</p>}
    </div> 
  );
};
export default App;