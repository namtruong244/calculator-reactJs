import React, {useLayoutEffect, useState} from "react";
import styles from './Ripple.module.css'
import {CmnConst} from "../../common";

type RippleProps = {
    duration?: number
    color?: string
}

type Ripple = {
    x: number
    y: number
    size: number
}

function useDebouncedRippleCleanUp(rippleCount: number, duration: number, cleanUpFunction: () => void) {
    useLayoutEffect(() => {

        let bounce: any = null;
        if (rippleCount > 0) {

            clearTimeout(bounce)

            bounce = setTimeout(() => {
                cleanUpFunction()
                clearTimeout(bounce)
            }, duration * 4)
        }

        return () => {
            clearTimeout(bounce)
        }
    }, [rippleCount, duration, cleanUpFunction])
}

function Ripple({duration = 850, color = CmnConst.WHITE_COLOR}: RippleProps) {
    const [rippleArray, setRippleArray] = useState<Array<Ripple>>([])

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([])
    })

    const addRipple = (event: React.MouseEvent<HTMLElement>) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect()
        const {width, height} = rippleContainer
        const size = width > height ? width : height
        const x = event.pageX - rippleContainer.x - size / 2
        const y = event.pageY - rippleContainer.y - size / 2
        const newRipple = {x, y, size}

        setRippleArray([...rippleArray, newRipple])
    }

    return (
        <div className={styles.ripple} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={`span${index}`}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                                backgroundColor: color,
                                animationDuration: `${duration}ms`
                            }}
                        />
                    )
                })}
        </div>
    )
}

export default Ripple
