import styles from './TodoItem.module.css'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function TodoItem(props) {
  

  const id = props.id;
  const todoDisc = props.todoDisc;
  const onChangeCB = props.onChange;
  const onDelete = props.onDelete;

  const [isChecked, setIsChecked] = useState(props.isDone);

  useEffect(() => {
    setIsChecked(props.isDone);
  }, [props.isDone]);

  const toggleChecked = (e) => {
    if (isChecked) {
      setIsChecked(false);
      onChangeCB(id, false);
    } else {
      setIsChecked(true);
      onChangeCB(id, true);
    }
  }
  
  return (
    <InputGroup className={props.className} >
        <InputGroup.Checkbox className={styles.checkBox} checked={isChecked} onChange={(e) => toggleChecked(e)}/>
        <Form.Control className={isChecked ? styles.lineThrough : null} readOnly value={todoDisc} />
        <Button variant="primary" onClick={(e) => onDelete(e, id)}>Delete</Button>
    </InputGroup>
  )
}
