import styles from './Wrapper.module.css'
import Output from "../output/Output";
import Key from "../key/Key";

function Wrapper() {
  return (
    <div className={styles.calculator}>
        <Output/>
        <Key/>
    </div>
  )
}

export default Wrapper
