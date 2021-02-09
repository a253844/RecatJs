import React,{useState} from 'react';
import Test from './Test'

const Testmin=()=>{
  const [value,setValue]=useState(10);
  return(
    <Test value={value} onClick={(e)=>{setValue(e.target.value)}}/>
  );
}
export default Testmin;