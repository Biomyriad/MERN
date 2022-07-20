import styles from './FormComponent.module.css'
import {useState} from 'react'

export default function FormComponent() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className={styles.FormComponent}>
        <form action="">
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" onChange={(e) => setFirstName(e.target.value)}/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/><br/><br/>
            <button onClick={(e) => e.preventDefault()}>Submit</button>
        </form> 
    </div>
  )
}
