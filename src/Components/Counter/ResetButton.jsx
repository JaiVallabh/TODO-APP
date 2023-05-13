import './ResetButton.css'
export default function Reset({resetParent}){
   
    return(
        <div>
            <button className ="ResetButton" onClick ={resetParent}>Reset</button>
        </div>
    )
}