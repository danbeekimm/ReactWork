import React,{useState} from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';


//고정할때 usestate에 숫자와 defaultChecked 주면 됨.
function App() {
  const [idx, setIdx] = useState(8);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  }
  return (
    <div>
      <div>
        <label>
          <input type='radio'name='comp' defaultValue='1'  onClick={selectComponent}/>OneApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='2'  onClick={selectComponent}/>TwoApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='3'   onClick={selectComponent}/>ThreeApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='4'  onClick={selectComponent}/>FourApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='5'  onClick={selectComponent}/>FiveApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='6'   onClick={selectComponent}/>SixApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='7'   onClick={selectComponent}/>SevenApp
        </label>
        <label>
          <input type='radio'name='comp' defaultValue='8'  defaultChecked onClick={selectComponent}/>EightApp
        </label>
       
      </div>
      <hr style={{backgroundColor:'pink'}}/>
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:idx===7?<SevenApp/>:<EightApp/>}
    </div>
  );
}

export default App;
