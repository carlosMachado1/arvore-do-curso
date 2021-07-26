import Head from "next/head"
import axios, { AxiosRequestConfig } from "axios"
import { Tab } from "../../../components/tab"
import {Content} from "../../../components/content"
import styles from "../../../styles/pages/Cursos.module.css"
import {SideMenu} from "../../../components/sideMenu"


async function SendData() {
    let courses
    const options: AxiosRequestConfig = {
        url: "https://f4a64eed3670.ngrok.io/courses",
        method: "GET",
        data: {
        },
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


export default function Cursos() {
    const usuario = "Carlos Machado"
    // const cursos = SendData()

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
