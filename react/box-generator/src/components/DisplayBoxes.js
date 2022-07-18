import styles from "./DisplayBoxes.module.css";

export default function DisplayBoxes(props) {
  return (
    <div className={styles.DisplayBoxes}>

    {
      props.boxes.map( (item) => {
          return item;
        }
      )
    }

    </div>
)
}
