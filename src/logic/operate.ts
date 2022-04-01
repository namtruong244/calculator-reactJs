import Big from "big.js";
import {CmnConst} from "../common";

export default function operate(
    numberOne: string | null | undefined,
    numberTwo: string | null | undefined,
    operation: string) {
    const one = Big(numberOne || CmnConst.ZERO)
    const two = Big(numberTwo || (operation === CmnConst.DIV || operation === CmnConst.TIMES ? CmnConst.ONE : CmnConst.ZERO))
    if (operation === CmnConst.PLUS) {
        return one.plus(two).toString()
    }
    if (operation === CmnConst.MINUS) {
        return one.minus(two).toString()
    }
    if (operation === CmnConst.TIMES) {
        return one.times(two).toString()
    }
    if (operation === CmnConst.DIV) {
        if (two.eq(CmnConst.ZERO)) {
            alert("Divide by 0 error")
            return CmnConst.ZERO
        }
        return one.div(two).toString()
    }
    throw Error(`Unknown operation '${operation}'`)
}