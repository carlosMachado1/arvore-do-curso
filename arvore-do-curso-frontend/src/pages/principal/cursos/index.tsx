import Head from "next/head"
import { Tab } from "../../../components/tab"
import {Content} from "../../../components/content"
import styles from "../../../styles/pages/Cursos.module.css"
import {SideMenu} from "../../../components/sideMenu"

export default function Cursos() {
    const usuario = "Carlos Machado"

    const teste = [
        {
            nome: "Engenharia de Computação",
        },
        {
            nome: "Engenharia Eletrica",
        },
        {
            nome: "Engenharia Civil",
        },
    ]

    return (
        <div>
            <Head>
                <title>Cursos</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.navigator}>
                    <SideMenu nome = {usuario}/>
                </div>

                <div className={styles.content}>
                <Tab component = {<Content lista={teste}/>}/>
                </div>
            </div>
        </div>
    )
}
