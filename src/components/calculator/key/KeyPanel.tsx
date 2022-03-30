import styles from './Key.module.css'
import {CmnConst} from "../../../common";
import React from "react";
import Key from "./Key";

type KeyPanelProps = {
    onClick: (buttonName: string) => void
}

export interface IKey {
    keyName: string
    style: string
    rippleColor: string | undefined
}

const keys: Array<IKey> = [
    {keyName: CmnConst.PLUS, style: "calculator__key--operator", rippleColor: undefined},
    {keyName: CmnConst.MINUS, style: "calculator__key--operator", rippleColor: undefined},
    {keyName: CmnConst.TIMES, style: "calculator__key--operator", rippleColor: undefined},
    {keyName: CmnConst.DIV, style: "calculator__key--operator", rippleColor: undefined},
    {keyName: CmnConst.SEVEN, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.EIGHT, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.NINE, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.FOUR, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.FIVE, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.SIX, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.ONE, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.TWO, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.THREE, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.ZERO, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.DOT, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.AC, style: '', rippleColor: CmnConst.GRAY_COLOR},
    {keyName: CmnConst.EQUAL, style: 'calculator__key--enter', rippleColor: undefined}
]

function KeyPanel(props: KeyPanelProps) {

    function clickButtonHandler(buttonType: string) {
        props.onClick(buttonType)
    }

    return (
        <div className={styles.calculator__keys}>
            {keys.map((key, index) => {
                return <Key
                    key={index}
                    keyName={key.keyName}
                    style={key.style}
                    rippleColor={key.rippleColor}
                    onClick={clickButtonHandler}
                />
            })}
        </div>
    )
}


export default KeyPanel
