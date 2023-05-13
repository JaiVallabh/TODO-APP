import {PropTypes} from 'prop-types'
import './CounterButton.css'

export default function CounterButton({by,increment,decrement}){

    return(
        <div className ="Counter">
            <div>
            <button className = "CounterButton" onClick = {() => increment(by)}>+{by}</button>
            <button className = "CounterButton" onClick = {() => decrement(by)}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes ={
    by:PropTypes.number
}