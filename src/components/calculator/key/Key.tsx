import styles from './Key.module.css'
import KeyButton from "./KeyButton";

function Key() {
  return (
    <div className={styles.calculator__keys}>
        <KeyButton className={`${styles.calculator__key} ${styles["calculator__key--operator"]}`}>+</KeyButton>
        <KeyButton className={`${styles.calculator__key} ${styles["calculator__key--operator"]}`}>-</KeyButton>
        <KeyButton className={`${styles.calculator__key} ${styles["calculator__key--operator"]}`}>&times;</KeyButton>
        <KeyButton className={`${styles.calculator__key} ${styles["calculator__key--operator"]}`}>÷</KeyButton>
        <KeyButton className={styles.calculator__key}>7</KeyButton>
        <KeyButton className={styles.calculator__key}>8</KeyButton>
        <KeyButton className={styles.calculator__key}>9</KeyButton>
        <KeyButton className={styles.calculator__key}>4</KeyButton>
        <KeyButton className={styles.calculator__key}>5</KeyButton>
        <KeyButton className={styles.calculator__key}>6</KeyButton>
        <KeyButton className={styles.calculator__key}>1</KeyButton>
        <KeyButton className={styles.calculator__key}>2</KeyButton>
        <KeyButton className={styles.calculator__key}>3</KeyButton>
        <KeyButton className={styles.calculator__key}>0</KeyButton>
        <KeyButton className={styles.calculator__key}>.</KeyButton>
        <KeyButton className={styles.calculator__key}>AC</KeyButton>
        <KeyButton className={`${styles.calculator__key} ${styles["calculator__key--enter"]}`}>=</KeyButton>
          {/*<KeyKeyButton className={styles.calculator__key}>test</KeyKeyButton>*/}
    </div>
  )
}


export default Key
