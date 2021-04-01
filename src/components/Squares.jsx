const Squares = (props) =>{
    const style = {
        border  : "2px solid red",
        width : "50px",
        height  : "50px",
        padding : "6px",
        "fontSize" : "40px",
        "fontWeight" : "bold",
        margin : "10px",
    }

    return (
        <button style={style} onClick={props.onClick}>
            {props.value}
        </button >
    )
}
export default Squares