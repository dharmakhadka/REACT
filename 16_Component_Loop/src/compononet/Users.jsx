export default function Users({name, age, location}){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{age} years old.</h2>
            <h2>Lives in {location}.</h2>
        </div>
    );
}