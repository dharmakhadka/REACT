function Student(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Grade : {props.grade}</p>
            <p>Remarks : {props.remarks}</p>
        </div>
    );
}

export default Student;