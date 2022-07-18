import styles from './AddBoxForm.module.css'
import {useState} from 'react'

export default function AddBoxForm(props) {

  const [boxSize, setBoxSize] = useState("")
  const [boxColor, setBoxColor] = useState("")

  const submitForm = (e) => {
    e.preventDefault();
    props.callback({size: boxSize, color: boxColor});
    e.target.reset();
    setBoxColor('');
    setBoxSize('');
  }

  return (
    <div className={styles.AddBoxForm}>
      <form onSubmit={submitForm}>
        <input placeholder='Size' onChange={(e) => setBoxSize(e.target.value)} />
        <select onChange={(e) => setBoxColor(e.target.value)}>
          <option selected>Pick a color!</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="magenta">Magenta</option>
          <option value="cyan">Cyan</option>
          <option value="black">Black</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}
