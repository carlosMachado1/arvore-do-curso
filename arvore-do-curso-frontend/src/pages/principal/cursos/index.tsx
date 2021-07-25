import Head from "next/head"
import { Tab } from "../../../components/tab"
import styles from "../../../styles/pages/Cursos.module.css"

export default function Cursos() {
    return (
        <div>
            <Head>
                <title>Cadastro de Usuário</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.tabContent}>
                    <Tab component={<div></div>} />
                </div>
            </div>
        </div>
    )
}
