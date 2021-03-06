import { useState } from "react"
import { EditCourse } from "./editCourse"
import { useRouter } from "next/router"
import axios, { AxiosRequestConfig } from "axios"
import { ExcluirCurso } from "../components/excluirCurso"
import { CadastrarCurso } from "../components/cadastrarCurso"
import ContentProps from "../interfaces/contentProps"
import styles from "../styles/components/Content.module.css"
import { BsSearch, BsPlusSquare, BsPencilSquare, BsTrash } from "react-icons/bs"


async function SendData() {
    let users
    const options: AxiosRequestConfig = {
        url: "http://localhost:5000/courses",
        method: "GET",
        data: {
        },
    }

    await axios(options)
        .then((response) => {
            users = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return users
}


export function Content(props: ContentProps) {
    const [editarCurso, setEditarCurso] = useState(false)
    const [excluirCurso, setExcluirCurso] = useState(false)
    const [cadastrarCurso, setCadastrarCurso] = useState(false)

    let cursos = async () => {
        const teste = await SendData()
        return teste
    }

    console.log(cursos)

    function handleClick() {
        console.log("fazer requisição do curso")
        setEditarCurso(true)
    }

    function handleDelete() {
        setExcluirCurso(true)
    }

    function handleCadastro() {
        setCadastrarCurso(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchRow}>
                <span className={styles.inputField}>
                    <span className={styles.icon}>
                        <BsSearch size="20px" />
                    </span>
                    <input
                        type="text"
                        placeholder="Faça uma pesquisa..."
                        className={styles.input}
                    />
                </span>

                <span className={styles.addIcon} onClick={handleCadastro}>
                    <BsPlusSquare size="30px" />
                </span>
            </div>

            <div className={styles.data}>
                {props.lista.map((item: string, index: number) => {
                    return (
                        <div key={index} className={styles.dataRow}>
                            <div className={styles.dataName}>{item}</div>
                            <div>
                                <span
                                    onClick={handleClick}
                                    className={styles.dataEdit}
                                >
                                    <BsPencilSquare size="20px" />
                                </span>
                                <span
                                    className={styles.dataDelete}
                                    onClick={handleDelete}
                                >
                                    <BsTrash size="20px" />
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {editarCurso ? <EditCourse /> : <></>}

            {excluirCurso ? <ExcluirCurso /> : <></>}

            {cadastrarCurso ? <CadastrarCurso /> : <></>}
        </div>
    )
}
