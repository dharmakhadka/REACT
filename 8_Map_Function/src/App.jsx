import Greeting from "./Greeting";

const App = () => {
  const friends = ["a","b","c","d","e","f","g","h","i"]
  return(
    <div>
      {friends.map((friend, index) => (
        <Greeting key={index} name={friend}></Greeting>
      ))}
    </div>
  );
}
export default App;