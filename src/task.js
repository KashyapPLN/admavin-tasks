import React, { useEffect, useState } from 'react'

export default function ({a,setA}) {
const [num,setNum]=useState(1);
const [data,setData] =useState("");

function increment(e){
  setNum(num+1);

}

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`).then((d)=>d.json()).then((v)=>setData(v))
},[num])
  return (

    <div>
      <p>{data.title}</p>
      <button onClick={(e)=>increment(e)}>next</button>
      <button>prev</button>
    </div>
  )
}
