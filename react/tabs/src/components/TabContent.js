import styles from './TabContent.module.css'

export default function TabContent(props) {
  return (
    <div className={styles.TabContent}>
      {props.component}
    </div>
  )
}
