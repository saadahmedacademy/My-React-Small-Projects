import Display from './components/display'
import BtnContainer from './components/BtnComponent'
import './App.css'
import { useState } from 'react'

function App() {
  
  const  [calVal,setCalVal] = useState('');
  const onButtonClick = (ButtonText) => {
  
  if(ButtonText === 'C') {
    setCalVal(calVal.slice(0,-1));
  }
  else if(ButtonText === 'AC'){
    setCalVal('0');
  }
  else if(ButtonText === '=') {
    setCalVal(eval(calVal));
  }
  else {
    setCalVal(calVal + ButtonText);
  }
 


  }


  return <center>

   <div className='calculator'>

   <Display displayValue ={calVal}></Display>
   <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
 
</div >

</center>
      
    
}

export default App
