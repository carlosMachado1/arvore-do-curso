import TabProps from "../interfaces/tab"
import styles from "../styles/components/Tab.module.css"

export function Tab(props: TabProps) {
    return <div className={styles.container}>{props.component}</div>
}
