import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
export default function App() {
  const [workduration,setworkduration]=useState(25);
  const [breakduration,setbreakduration]=useState(5);
  const [timer,settimer]=useState(workduration);
  const [second,setsecond]=useState(0);
  const[start,setstart]=useState(0);
  const[text,settext]=useState("Start");
  const[heading,setheading]=useState("Keep Working")
  const [check,setcheck]=useState(0);
  
  useEffect(() => {
    let interval;
    if (start === 1) {
      interval = setInterval(() => {
        if (second === 0) {
          if (timer === 0) {
           
            if (check === 0) {
              settimer(breakduration);
              setheading("Rest Time");

              setcheck(1);
            } else {
              settimer(workduration);
              setheading("Keep Working");

              setcheck(0);
            }
            setsecond(59);
          } else {
            settimer(timer - 1);
            setsecond(59);
          }
        } else {
          setsecond(second - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [second, timer, start, check, breakduration, workduration]);

  const continuee = () => {
    if (start === 0) {
      setstart(1);
      settext("End");
      if (check === 1) {
        settimer(breakduration);
        setcheck(0);
      } else {
        settimer(workduration);
      }
    } else {
      setstart(0);
      settext("Start");
    }
  };
  function incrwork(){
    setworkduration(workduration+1);
    settimer(workduration+1);
  }
  function decrwork(){
    if(workduration>0){

      setworkduration(workduration-1);
      settimer(workduration-1);
    }
  }
  function incrbreak(){
    setbreakduration(breakduration+1);
  }
  function decrbreak(){
    if(breakduration>0){

      setbreakduration(breakduration-1);
    }
  }
  function reset(){
    setworkduration(25);
    setbreakduration(5);
    settimer(25);
    setstart(0);
    setsecond(0);
  }
  return (
    <div>
      <Container1>
        <h1>Pomodoro Timer</h1>
      </Container1>
      <Container2>
        <Bgimg>
          <h2>{heading}</h2>
          <h1>{timer}:{second}</h1>
          <StartBtn onClick={continuee}>{text}</StartBtn>
        </Bgimg>

      </Container2>
      <Container3>
        <Box>
          <h3>Work Duration</h3>
          <Box1>
            <Button onClick={incrwork}>+</Button>
            <h4>{workduration}Mins</h4>
            <Button onClick={decrwork}>-</Button>
          </Box1>
        </Box>
        <Box>
          <ResetBtn onClick={reset}>Reset</ResetBtn>
        </Box>
        <Box>
        <h3>Break Duration</h3>
          <Box1>
            <Button onClick={incrbreak}>+</Button>
            <h4>{breakduration} Mins</h4>
            <Button onClick={decrbreak}>-</Button>
          </Box1>
        </Box>
      </Container3>
    </div>
  )
}
const Container1=styled.div`
color: #510D0D;
text-align: center;
`
const Container2=styled.div`
display: flex;
justify-content: center;
align-items: center;
color:#510D0D;
text-align: center;
margin: 30px;
`
const Container3=styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 40px;
color:#510D0D;
@media (max-width:430px){
  flex-direction: column;
  
}

`
const Bgimg=styled.div`
border: 14px solid #DB6B5F;
padding: 50px;
border-radius: 51%;
`
const Box1=styled.div`
display: flex;
margin: 0px 34px;
flex-direction: column;
@media (max-width:450px){
  
  flex-direction: row-reverse;
  margin: 0px;
}
`
const Box=styled.div`
margin: 0px 34px;
`
const ResetBtn=styled.button`
text-align: center;
    width: 100px;
    height:100px;
    border:1px solid black;
    border-radius: 50%;
    font-size: x-large;
    border: none;
    padding:5px;
    color: #F3776A;
    background-color: #510D0D;
`
const Button=styled.button`
  padding: 20px;
  margin:0px 40px;
  border-radius: 7px;
  outline: none;
  border: none;
  font-size: xx-large;
  
  color: #F3776A;
background-color: #510D0D;
`
const StartBtn=styled.button`
font-size: xx-large;
padding: 12px 20px;
color: #F3776A;
background-color: #510D0D;
border-radius: 7px;
border: none;

`