import Users from "./compononet/Users"
const users = [
  {
    id:1, name:"Dharma", age:20, location:"Butwal",
  },
  {
    id:2, name:"Shyam", age:20, location:"Kathmandu",
  },
  {
    id:3, name:"Hari", age:22, location:"Pokhara",
  },
  {
    id:4, name:"Ram",age:23, location:"Janakpur"
  }
]
export default function App(){
  return(
    <div>
      {users.map((user) => (
        <Users
        key={user.id}
        name={user.name}
        age={user.age}
        location={user.location}
        />
      ))}
    </div>
  );
}