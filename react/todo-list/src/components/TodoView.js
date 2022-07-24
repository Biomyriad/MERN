import styles from './TodoView.module.css'
import {Button, Form, InputGroup} from 'react-bootstrap'
import TodoItem from './TodoItem'
import { useState} from 'react';

export default function TodoView(props) {
  
  const [todoListData, setTodoList] = props.todoListArr;
  const [newTodoDesc, setNewTodoDesc] = useState("")

  const todoItemOnChangeCB = (id, isDone) => {
    let todoList = structuredClone(todoListData);
    todoList[id].isDone = isDone;
    setTodoList(todoList);

    console.log(JSON.stringify(todoListData, null, "  "));
  }

  const selectAllTodos = () => {
    let todoList = structuredClone(todoListData);
    for(let i = 0; i<todoListData.length; i++) {
      todoList[i].isDone = true;
    }
    setTodoList(todoList);
  }

  const deleteChecked = () => {
    let todoList = structuredClone(todoListData);
    for(let i = todoListData.length - 1; i>=0; i--) {
      console.log(i + " " + todoListData[i].isDone)
      if(todoListData[i].isDone === true) todoList.splice(i, 1);
    }
    setTodoList(todoList);
  }

  const deleteTodoItem = (e, index) => {
    let todoList = structuredClone(todoListData);
    todoList.splice(index, 1);
    setTodoList(todoList);
  }

  const addTodoItem = (e) => {
    let todoList = structuredClone(todoListData);
    let newTodo = {
      disc: newTodoDesc,
      isDone: false
    }
    console.log(newTodoDesc)
    //todoList.push(newTodo);
    setTodoList([...todoList, newTodo]);
  }
  
  return (
    <div className={styles.TodoView}>

      <div>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Todo Disc." onChange={(e) => setNewTodoDesc(e.target.value)}/>
            <Button id="button-addon2" onClick={(e) => addTodoItem(e)}>Add</Button>
          </InputGroup>
        </Form>
      </div>

      <hr/>

      <div>
        {
          todoListData.map((value, index) => <TodoItem className="mb-3" key={index} id={index} todoDisc={value.disc} isDone={value.isDone} onChange={todoItemOnChangeCB} onDelete={deleteTodoItem}/> )
        }
      </div>

      <Button className='me-2' onClick={(e) => selectAllTodos()}>Select All</Button>
      <Button className='me-2' onClick={(e) => deleteChecked()}>Delete Checked</Button>
      {/* <Button  onClick={(e) => console.log(JSON.stringify(todoListData, null, "  "))}>view</Button> */}

    </div>
  )
}
