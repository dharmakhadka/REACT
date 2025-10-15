import Random from "./Random";
import Area from "./Area";

const App = () => {
  const name="Dharma";
  const greet = () => {
    return(
      "How are you?"
    )
  }
  return(
    <div>
      <h1>Hello, Good Evening {name}. {greet()} </h1>
      <Random></Random>
      <Area></Area>
    </div>
  )
}
export default App;