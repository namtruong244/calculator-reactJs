import {CmnConst} from "../common";

export default function isNumber(input: string) {
    return CmnConst.NUMBER_PATTERN.test(input)
}
