import styles from './Wrapper.module.css'
import Output from "../output/Output";
import KeyPanel from "../key/KeyPanel";
import {useState} from "react";
import {ICalculate} from "../../../@types/ICalculate";
import {calculate} from "../../../logic";

const initialCalculate: ICalculate = {
    total: null,
    next: null,
    operator: null
}

function Wrapper() {
    const [calculateState, setCalculateState] = useState<ICalculate>(initialCalculate)

    function clickButtonHandler(buttonType: string) {
        setCalculateState(calculate(calculateState, buttonType))
    }

    return (
        <div className={styles.calculator}>
            <Output result={calculateState.total}/>
            <KeyPanel onClick={clickButtonHandler}/>
        </div>
    )
}

export default Wrapper
