function Product(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Product;