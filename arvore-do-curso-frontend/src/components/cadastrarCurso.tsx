import styles from "../styles/components/EditCourse.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { BsFillXSquareFill } from "react-icons/bs"
import axios, { AxiosRequestConfig } from "axios"
import { useRouter } from "next/router"
import CursosID from "../interfaces/cursosID"


async function SendData(data: CursosID) {
    const { nome, qntPeriodo } = data
    let users
    const options: AxiosRequestConfig = {
        url: "http://localhost:5000/courses",
        method: "POST",
        data: {
            name: nome,
            amount_of_period: qntPeriodo,
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


export function CadastrarCurso() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<CursosID>()
    const onSubmit: SubmitHandler<CursosID> = async (data) => {
        const cadastrar = await SendData(data)
        if (cadastrar == "") {
            router.reload()
        }
    }

    function handleClick() {
        router.reload()
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <span className={styles.cancel} onClick={handleClick}>
                    <BsFillXSquareFill size="20px" color="#DA0037" />
                </span>
                <label htmlFor="nomeCurso" className={styles.label}>
                    Nome do Curso
                </label>
                <input
                    type="text"
                    id="nomeCurso"
                    className={styles.input}
                    {...register("nome", { required: true })}
                />

                <label htmlFor="qntPeriodos" className={styles.label}>
                    Quantidade de Periodos
                </label>
                <input
                    type="text"
                    id="qntPeriodos"
                    className={styles.input}
                    {...register("qntPeriodo", { required: true })}
                />

                <button type="submit" className={styles.button}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
