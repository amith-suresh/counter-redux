import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from '../redux/counter/counterAction'
import { Decrement } from '../redux/counter/counterAction'

function Counter() {
    const count=useSelector((state)=>state.count)
  const dispatch=  useDispatch()
  return (
    <div>
     <button
     onClick={()=>dispatch(Increment())}>Increment</button>
     Count :{count}
     <button 
     onClick={()=>dispatch(Decrement())}>decrement</button>
    </div>
  )
}

export default Counter
