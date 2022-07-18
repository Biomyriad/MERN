import styles from "./ColorBox.module.css";

export default function ColorBox(props) {

  return (
    <div 
    className={styles.box} 
    style={{
      height: props.height, 
      width: props.width, 
      backgroundColor: props.color
    }}>

    </div>
  )
}
