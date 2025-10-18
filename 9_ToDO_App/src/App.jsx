import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return(
    <div>
      <h2>To Do App</h2>
      <input value= {input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => {
        if(input.trim() ===""){
          return;
        }
        setTasks([...tasks,input]);
        setInput("");
        }}>Add Tasks</button>
      <ul>
        {tasks.map((task,index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
