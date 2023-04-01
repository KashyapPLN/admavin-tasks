import React from 'react'
import Screen1 from './Screen1'

import { useState } from 'react';
import SortingTableComponent from './Screen2';
import { Container } from 'react-bootstrap';
export default function TableTask() {
    const [disp1,setDisp1]=useState(false);
    const [disp2,setDisp2]=useState(false);
  return (
    <div>
        <div>
        <button onClick={(e)=>{setDisp1(true);setDisp2(false);}}style={{margin:'40px'}}>Screen1</button>
        <button onClick={(e)=>{setDisp2(true);setDisp1(false);}}>Screen2</button>
        </div>
        <Container style={{border: 'solid',padding:'20px'}}>
        {disp1===true ? <Screen1/>: null}
        {disp2===true ? <SortingTableComponent/>: null}
        </Container>
    </div>
  )
}
