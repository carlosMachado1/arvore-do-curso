import Head from "next/head"
import axios, { AxiosRequestConfig } from "axios"
import { Tab } from "../../../components/tab"
import { ContentDisciplina } from "../../../components/contentDisciplina"

import styles from "../../../styles/pages/Cursos.module.css"
import { SideMenu } from "../../../components/sideMenu"

async function SendData() {
    let courses
    const options: AxiosRequestConfig = {
        url: "https://f4a64eed3670.ngrok.io/courses",
        method: "GET",
        data: {},
    }

    await axios(options)
        .then((response) => {
            courses = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    console.log(courses)
    return courses
}

export default function Disciplina() {
    const usuario = "Carlos Machado"
    let cursos
    cursos = [
        "Engenharia de Computação",
        "Engenharia Civil",
        "Engenharia de Software",
    ]

    return (
        <div>
            <Head>
                <title>Disciplinas</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.navigator}>
                    <SideMenu nome={usuario} />
                </div>

                <div className={styles.content}>
                    <Tab component={<ContentDisciplina lista={cursos} />} />
                </div>
            </div>
        </div>
    )
}
