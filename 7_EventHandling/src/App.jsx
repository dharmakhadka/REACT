import { useState } from "react";

const App= () => {
const [input, setInput] = useState("");

return(
  <div>
    <button onClick={()=>alert('hello')}>Click</button>
    <input type="text" onChange={(e)=>setInput(e.target.value)}></input>
    <p>Typed content : {input}</p>
  </div>
);
}

export default App;