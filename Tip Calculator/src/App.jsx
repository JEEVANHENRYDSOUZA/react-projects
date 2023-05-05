import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


    const[bill,setBill]=useState(50)
    const[tippercent,settip]=useState(18)
    const[people,setpeople]=useState(1)
    const totaltip=(bill*tippercent)/100;
    const perPerson=totaltip/people;
    return (
      <>
        <label htmlFor="bill">Bill</label>
        <input id="bill"
          type="number"
          value={bill}
          onChange={event=>{
            setBill(parseInt(event.target.value))
          }}
          
          />
         <label htmlFor="tipPercentage">Tip Percentage</label>
        <input id="tipPercentage"
          type="number"
          value={tippercent}
          onChange={event=>{
            settip(parseInt(event.target.value))
          }}
          
          ></input>  
  
         <label htmlFor="people">Number of People</label>
         <input id="people"
           type="number"
          value={people}
          onChange={event=>{
            setpeople(parseInt(event.target.value))
          }}
          
          ></input> 
        <p>Total Tip: {isNaN(totaltip)?'-':`$${totaltip.toFixed(2)}`}</p>
        <p>Tip Per Person: {isNaN(perPerson)?'-':`$${perPerson.toFixed(2)}`}</p>
      </>
    );
  
}

export default App
