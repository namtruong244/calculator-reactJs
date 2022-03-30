import {IKey} from "./KeyPanel";
import styles from "./Key.module.css";
import Ripple from "../../ripple/Ripple";
import React from "react";

interface IKeyProps extends IKey {
    onClick: (buttonType: string) => void
}

function Key(props: IKeyProps) {

    function clickButtonHandler() {
        props.onClick(props.keyName)
    }

    return (
        <button
            className={`${styles.calculator__key} ${styles[props.style]}`}
            onClick={clickButtonHandler}
        >
            {props.keyName}
            <Ripple color={props.rippleColor}/>
        </button>
    )
}

export default Key
