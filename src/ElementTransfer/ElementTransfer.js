import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function () {
    const b1= ['item1','item2','item3','item4','item5','item6']
    const [b1Items,setB1Items]= useState([]);
    const [b2Items,setB2Items]= useState(b1);
    const [b3Items,setB3Items]= useState([]);
    const [b2Exist,setB2Exist]= useState(false);
    const [removePress,setRemovePress]=useState(false);



   function b1Click(e){
    
b1Items.push(e.target.innerText);

var temp = b1Items.filter((item, 
    index) => b1Items.indexOf(item) === index);
    setB1Items([...temp]);
   }

    if(b2Exist===true){
    for (var i = 0; i<b1Items.length; i++) {
        var arrlen = b2Items.length;
        for (var j = 0; j<arrlen; j++) {
            if (b1Items[i] === b2Items[j]) {
                var arr=b2Items.slice(0, j).concat(b2Items.slice(j+1, arrlen));
                 setB2Items(arr);
            }
        }
    }
    
 }
 if(removePress===true){
 if(b3Items.length!==0){
    for (var i = 0; i<b3Items.length; i++) {
        var arrlen = b1Items.length;
        for (var j = 0; j<arrlen; j++) {
            if (b3Items[i] === b1Items[j]) {
               setB1Items(b1Items.slice(0, j).concat(b1Items.slice(j+1, arrlen)));
               var arr = [...b2Items,b3Items[i]];
               setB2Items(arr);
               
            }
        }
    }
 }
}
 function bucket2(e){
 setRemovePress(!removePress);
 }


 function b2Click(e){
    b3Items.push(e.target.innerText);
    var temp = b3Items.filter((item, 
        index) => b3Items.indexOf(item) === index);
        setB3Items([...temp]);
 }
 console.log("b3 is"+b3Items); 
  return (
    <Container className='elementTransfer'>


<Container className='bucket1'>
    <h4 style={{margin:'30px',textAlign:'center'}}>Bucket 1</h4>
{(b2Items.filter((item, 
                index) => b2Items.indexOf(item) === index)).map((v)=><div id={v} className='bucketlist' style={{backgroundColor: b1Items.includes(v) ? "red" : "greenyellow"}} onClick={(e)=>{b1Click(e);}}>{v}</div>)}
</Container>


<Container className='buttons'>
    <Button onClick={(e)=>{setB2Exist(true);}}>Add</Button>
    <Button variant='danger'onClick={(e)=>{bucket2(e);}}>Remove</Button>
    <Button onClick={(e)=>{setB1Items(b1);setB2Exist(true)}}>Add All</Button>
    <Button onClick={(e)=>{setB1Items([]);setB2Exist(false);setB2Items(b1)}}variant='danger'>Remove All</Button>
</Container>


<Container className='bucket2'>
<h4 style={{margin:'30px',textAlign:'center'}}>Bucket 2</h4>
{b2Exist===true? b1Items.map((v)=><div id={v} className='bucketlist' style={{backgroundColor: b3Items.includes(v) ? "red" : "greenyellow"}} onClick={(e)=>b2Click(e)}>{v}</div>):null}
</Container>
    </Container>
  )
}
