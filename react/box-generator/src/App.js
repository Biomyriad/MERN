import ColorBox from './components/ColorBox';
import styles from "./App.module.css";
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import DisplayBoxes from './components/DisplayBoxes';
import AddBoxForm from './components/AddBoxForm';

function App() {
  // App states
  const [boxes, setBoxes] = useState([])

  const addBoxFormHandler = (data) => {
    setBoxes([...boxes, <ColorBox key={uuidv4()} height={data.size + "px"} width={data.size + "px"} color={data.color}/>])
  }

  return (
    <div className={styles.App}>
      <AddBoxForm callback={addBoxFormHandler}/>
      <DisplayBoxes boxes={boxes}/>
    </div>
  );
}

export default App;
