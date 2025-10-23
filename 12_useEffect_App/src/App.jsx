import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(() =>{
    return Number(localStorage.getItem("count")) || 0;
  });
  useEffect(() => {
    localStorage.setItem("count",count);
  })

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}
export default App;
