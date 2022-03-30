import {ICalculate} from "../@types/ICalculate";
import {CmnConst} from "../common";

const Big = require('big.js')

export default function calculate(state: ICalculate, buttonType: string): ICalculate {
    if (buttonType === CmnConst.AC) {
        return {
            total: null,
            next: null,
            operator: null
        }
    }

    if (buttonType === CmnConst.ONE) {
        return {
            total: '1'
        }
    }


    return {
        total: null,
        next: null,
        operator: null
    }
}
