import styles from './Tab.module.css'

export default function Tab(props) {

  return (
    <div className={styles.Tab + (props.selected ? " " + styles.selected : "")} onClick={props.onClick}>{props.tabName}</div>
  )
}
