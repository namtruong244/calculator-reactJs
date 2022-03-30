import styles from './Output.module.css'

type OutputProps = {
    result: string | null | undefined
}

function Output(props: OutputProps) {
    return (
        <div className={styles.calculator__output}>
            {props.result || 0}
        </div>
    )
}

export default Output
