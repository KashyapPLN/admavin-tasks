import React, { useState } from 'react'

export default function Login_page() {
const [fN,setFN]=useState('');
const [lN,setLN]=useState('');
const [mN,setMN]=useState('');
const [dob,setDob]=useState('');
const [email,setEmail]=useState('');
const [phn,setPhn]=useState('');
const [occu,setOccu]=useState('');
const [comp,setComp]=useState('');
const [pwd,setPwd]=useState('');
const[obj,setObj]=useState({});
const [fN1,setFN1]=useState('');
const [pwd1,setPwd1]=useState('');
const [obj1,setObj1]=useState({});
const [message,setMessage]=useState('');
function signUp(e){
    const temp={
        fN: fN,
        lN:lN,
        mN:mN,
        dob:dob,
        email:email,
        phn:phn,
        occu:occu,
        comp:comp,
        pwd:pwd
    }
setObj(temp);
fetch("https://marlotask.vercel.app/user/marlotask/signup",{
      method : 'POST',
      body :JSON.stringify(obj),
      headers:{ 'Content-Type': 'application/json',
                'Accept' : 'application/json' }
    }).then((data)=>console.log(data))
console.log("object is",obj);

}
function login(e){
    const temp1={
        fN:fN1,
        pwd:pwd1
    }
    setObj1(temp1);
    fetch("https://marlotask.vercel.app/user/marlotask/login",{
      method : 'POST',
      body :JSON.stringify(obj1),
      headers:{ 'Content-Type': 'application/json',
                'Accept' : 'application/json' }
    }).then((data)=>console.log(data.status))
    console.log('obj1',obj1)
}


  return (
    <div style={{marginTop:'30px'}}>
    <div style={{display:'flex',flexDirection:'column',width:'300px',alignItems:'center'}}>
      <h2>Sign Up</h2>
        <input type='text' placeholder='First Name' onBlur={(e)=>{setFN(e.target.value);}} required/><br/>
        <input type='text' placeholder='Middle Name'onBlur={(e)=>setMN(e.target.value)}/><br/>
        <input type='text' placeholder='Last Name'onBlur={(e)=>setLN(e.target.value)}required/><br/>
        <input type='text' placeholder='Date Of Birth' onBlur={(e)=>setDob(e.target.value)}/><br/>
        <input type='email' placeholder='Email' onBlur={(e)=>setEmail(e.target.value)}required/><br/>
        <input type='tel' placeholder='Phone Number'onBlur={(e)=>setPhn(e.target.value)}/><br/>
        <input type='text' placeholder='Occupation'onBlur={(e)=>setOccu(e.target.value)}/><br/>
        <input type='text' placeholder='Company'onBlur={(e)=>setComp(e.target.value)}/><br/>
        <input type='password' placeholder='Password'onBlur={(e)=>setPwd(e.target.value)}required/><br/>
<button onClick={(e)=>signUp(e)}>Submit</button>

    </div>
    <div style={{display:'flex',flexDirection:'column',width:'300px',alignItems:'center'}}>
        <h2 style={{marginTop:'30px'}}>Login</h2>
        <input type='text' placeholder='First Name' onBlur={(e)=>{setFN1(e.target.value);}} required/><br/>
        <input type='password' placeholder='password' onBlur={(e)=>{setPwd1(e.target.value);}} required/><br/>
        <button onClick={(e)=>login(e)}>login</button>
    </div>
    </div>
  )
}
