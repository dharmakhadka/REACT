import { useState } from "react";

const App = () => {
  const [count,setCount] = useState(0);
  return(
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
   
  );
}

export default App;