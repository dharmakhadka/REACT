const Area = () => {
    const findarea = (length, breadth) => {
        return length * breadth ;
    }
    return(
        <h2>The area is : {findarea(2,2)}</h2>
    )
}
export default Area;