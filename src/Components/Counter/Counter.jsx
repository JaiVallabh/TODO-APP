import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';
import Reset from './ResetButton';

export default function Counter(){
    
    const [count,setCount] = useState(0);

    function increment(by){
      setCount(count+by)
    }

    function decrement(by){
        setCount(count-by)
      }

    function resetParent(){
        setCount(0)
    }

    return(
        <>
        <CounterButton by = {1} increment = {increment} decrement ={ decrement}/>
        <CounterButton by = {2} increment = {increment} decrement ={ decrement}/>
        <CounterButton by = {5} increment = {increment} decrement ={ decrement}/>
        <span className ="totalCount">{count}</span>
        <Reset resetParent ={resetParent}/>
        </>
    )
}
