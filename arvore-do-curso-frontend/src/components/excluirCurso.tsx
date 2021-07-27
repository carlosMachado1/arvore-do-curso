import styles from "../styles/components/ExcluirCurso.module.css"
import { useRouter } from "next/router"
import axios, { AxiosRequestConfig } from "axios"


async function SendData(id: number) {
    let users
    const options: AxiosRequestConfig = {
        url: `http://localhost:5000/courses/${id}`,
        method: "DELETE",
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



export function ExcluirCurso(props) {
    const router = useRouter()

    async function excluirCurso() {
        let id = localStorage.getItem("id")
        let cursos = await SendData(parseInt(id))
        router.reload()
    }

    function fecharModal() {
        router.reload()
    }

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <p className={styles.dataText}>
                    Você deseja mesmo excluir o curso de{" "}
                    <span className={styles.dataSpan}>{props.curso}</span>?
                </p>
                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.salvar}
                        onClick={excluirCurso}
                    >
                        Sim
                    </button>
                    <button
                        type="button"
                        className={styles.cancelar}
                        onClick={fecharModal}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    )
}
