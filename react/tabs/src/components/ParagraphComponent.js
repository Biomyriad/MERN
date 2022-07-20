import styles from './ParagraphComponent.module.css'

export default function ParagraphComponent(props) {
  return (
    <div className={styles.ParagraphComponent}>{props.info}</div>
  )
}
