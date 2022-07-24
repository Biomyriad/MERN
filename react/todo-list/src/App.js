import { useState } from 'react'
import styles from './App.module.css'
import TodoView from './components/TodoView'

export default function App() {
let todoArray = [
  {
    disc: "a task 1",
    isDone: false
  },

  {
    disc: "a task 2",
    isDone: false
  },

  {
    disc: "a task 3",
    isDone: false
  }
]
  const toDoList = useState(todoArray);
  //const [toDoListData, setTodoList] = toDoList;

  return (
    <div className={styles.App}>
      <TodoView todoListArr={toDoList} />
    </div>
  )
}

