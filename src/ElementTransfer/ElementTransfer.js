import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function () {
    const b1= ['item1','item2','item3','item4','item5','item6']
    const [b1Items,setB1Items]= useState([]);
    // const [b1display,setB1Display]= useState([]);
    // const [assign,setAssign]=useState(0);
    const [b2Items,setB2Items]= useState(b1);
    const [b3Items,setB3Items]= useState([]);
    const [b2Exist,setB2Exist]= useState(false);
    const [b3Exist,setB3Exist]= useState(false);


   function b1Click(e){
    
b1Items.push(e.target.innerText);
setB1Items([...b1Items]);
// setB1Display(b1Items);
   }
//    console.log('display',b1display);

    if(b2Exist===true){
    for (var i = 0; i<b1Items.length; i++) {
        var arrlen = b2Items.length;
        for (var j = 0; j<arrlen; j++) {
            if (b1Items[i] === b2Items[j]) {
                var arr=b2Items.slice(0, j).concat(b2Items.slice(j+1, arrlen));
                
                    console.log('final is'+arr)
               setB2Items(arr.filter((item, 
                index) => arr.indexOf(item) === index));
            }
        }
    }
    
 }
 function bucket2(e){
 if(b3Items.length!==0){
    for (var i = 0; i<b3Items.length; i++) {
        var arrlen = b1Items.length;
        for (var j = 0; j<arrlen; j++) {
            if (b3Items[i] === b1Items[j]) {
               setB1Items(b1Items.slice(0, j).concat(b1Items.slice(j+1, arrlen)));
              
               setB2Items([...b2Items,b3Items[i]]);
               
            }
        }
    }
 }
 }


 function b2Click(e){
    b3Items.push(e.target.innerText);
    setB3Items([...b3Items]);
 }
 console.log("b3 is"+b3Items); 
  return (
    <Container className='elementTransfer'>


<Container className='bucket1'>
{(b2Items.filter((item, 
                index) => b2Items.indexOf(item) === index)).map((v)=><div className='bucketlist' onClick={(e)=>{b1Click(e);}}>{v}</div>)}
</Container>


<Container className='buttons'>
    <Button onClick={(e)=>{setB2Exist(true);}}>Add</Button>
    <Button variant='danger'onClick={(e)=>{bucket2(e);}}>Remove</Button>
    <Button onClick={(e)=>{setB1Items(b1);setB2Exist(true)}}>Add All</Button>
    <Button onClick={(e)=>{setB1Items([]);setB2Exist(false);setB2Items(b1)}}variant='danger'>Remove All</Button>
</Container>


<Container className='bucket2'>
{b2Exist===true? b1Items.map((v)=><div className='bucketlist' onClick={(e)=>b2Click(e)}>{v}</div>):null}
</Container>
    </Container>
  )
}
