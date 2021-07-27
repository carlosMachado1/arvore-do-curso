import styles from "../styles/components/EditCourse.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { BsFillXSquareFill } from "react-icons/bs"
import { useRouter } from "next/router"
import CursosID from "../interfaces/cursosID"
import axios, { AxiosRequestConfig } from "axios"


async function SendData(id: number, nome: string, qntPeriodo:number) {
    let users
    const options: AxiosRequestConfig = {
        url: `http://localhost:5000/courses/${id}`,
        method: "PUT",
        data: {
            name: nome,
            amount_of_period: qntPeriodo
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


export function EditCourse() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CursosID>()
    const onSubmit: SubmitHandler<CursosID> = async (data) => {
        const {nome, qntPeriodo} = data
        let id = localStorage.getItem("id")
        let cursos = await SendData(parseInt(id), nome, qntPeriodo,)
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
