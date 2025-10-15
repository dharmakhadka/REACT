const Random = () => {
    const random = Math.ceil(Math.random() * 100);

    return(
        <h2>The random number is : {random}</h2>
    );
}
export default Random;