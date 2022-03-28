import React, { LegacyRef, MutableRefObject, ReactElement, RefObject, useEffect, useRef, useState } from "react";
import styles from './Key.module.css'

type KeyButtonProps = {
  children: React.ReactChild
  [x:string]: any
}

function KeyButton(props: KeyButtonProps) {

    const [circle, setCircle] = useState<ReactElement|null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        setCircle(null)
      }, 600)

      return () => {
        clearTimeout(timer)
      }
    }, [circle])

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current

      const diameter = Math.max(button!.clientWidth, button!.clientHeight)
      const radius = diameter / 2

      const width = `${diameter}px`, height = `${diameter}px`
      const left = `${event.clientX - button!.offsetLeft - radius}px`
      const top = `${event.clientY - button!.offsetTop - radius}px`
      const circleElement = React.createElement('span',
        {style: {width, height, left, top}, className: styles.ripple})

      setCircle(circleElement)

    }

    return <button ref={buttonRef} onClick={createRipple} className={props.className}>{circle}{props.children}</button>
}

export default KeyButton