import { INCREMENT } from "./counterTypes";
import { DECREMENT } from "./counterTypes";

  
export const Increment =()=>{
    return  {
        type:INCREMENT
      }
}
 

export const Decrement=()=>{
    return{
        type:DECREMENT
    }
}