import {ICalculate} from "../@types/ICalculate";
import {CmnConst} from "../common";
import isNumber from "./isNumber";
import operate from "./operate";

export default function calculate(calculateState: ICalculate, buttonType: string): ICalculate {
    if (buttonType === CmnConst.AC) {
        return {
            total: null,
            next: null,
            operation: null
        }
    }

    if (isNumber(buttonType)) {
        if (buttonType === CmnConst.ZERO && calculateState.next === CmnConst.ZERO) {
            return {}
        }

        // If there is an operator, update next
        if (calculateState.operation) {
            if (calculateState.next) {
                return {
                    ...calculateState,
                    next: calculateState.next + buttonType
                }
            }
            return {
                ...calculateState,
                next: buttonType
            }
        }

        // If there is no operator, update next and clear the value
        if (calculateState.next) {
            const next = calculateState.next === CmnConst.ZERO ? buttonType : calculateState.next + buttonType
            return {
                ...calculateState,
                next,
                total: null
            }
        }

        return {
            ...calculateState,
            next: buttonType,
            total: null
        }
    }

    if (buttonType === CmnConst.DOT) {
        if (calculateState.next) {
            if (calculateState.next.includes(CmnConst.DOT)) {
                return calculateState
            }
            return {
                ...calculateState,
                next: `${calculateState.next}${CmnConst.DOT}`
            }
        }
        return {
            ...calculateState,
            next: `${CmnConst.ZERO}${CmnConst.DOT}`
        }
    }

    if (buttonType === CmnConst.EQUAL) {
        if (calculateState.next && calculateState.operation) {
            return {
                total: operate(calculateState.total, calculateState.next, calculateState.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }

    if (calculateState.operation) {
        return {
            total: operate(calculateState.total, calculateState.next, calculateState.operation),
            next: null,
            operation: buttonType
        }
    }

    if (!calculateState.next) {
        return {
            ...calculateState,
            operation: buttonType
        }
    }

    return {
        total: calculateState.next,
        next: null,
        operation: buttonType
    }
}
