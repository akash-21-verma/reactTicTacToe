import Squares from "./Squares"
const Board = ( props )=>{
     const style = {
         margin : "10px",
         border  : "2px solid red",
         width : "250px",
         height  : "250px",
         display : "grid",
         "gridTemplate" : "repeat(3,1fr) / repeat(3,1fr)",
         padding : "15px 25px 25px 15px",
     }

    return (
        <div style={style}>
         {/* console.log(props.square)   */}
        {
            props.square.map( (val,id) =>{
                return(
                    <Squares key={id} value={val} onClick={ () => props.onclick(id) } />
                )
            }  )
        }
                        
        </div>
    )
}
export default Board