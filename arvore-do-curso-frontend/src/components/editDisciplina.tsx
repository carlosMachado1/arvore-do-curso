import styles from "../styles/components/EditDisciplina.module.css"
import { BsFillXSquareFill } from "react-icons/bs"
import DisciplinaID from "../interfaces/disciplinaID"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import axios, { AxiosRequestConfig } from "axios"

async function SendData(id: number, nome: string, qntPeriodo:number) {
    let users
    const options: AxiosRequestConfig = {
        url: `http://localhost:5000/discipline/${id}`,
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

export function EditDisciplina() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DisciplinaID>()
    const onSubmit: SubmitHandler<DisciplinaID> = async (data) => {
        console.log(data)
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
                    Nome da Disciplina
                </label>
                <input
                    type="text"
                    id="nomeCurso"
                    className={styles.input}
                    {...register("nome", { required: true })}
                />

                <label htmlFor="qntPeriodos" className={styles.label}>
                    Pré-Requisitos
                </label>
                <input
                    type="text"
                    id="qntPeriodos"
                    className={styles.input}
                    {...register("preRequisitos", { required: true })}
                />

                <div className={styles.radio}>
                    <div className={styles.inputGroup}>
                        <input
                            type="radio"
                            id="cursando"
                            value="cursando"
                            {...register("estado", { required: true })}
                        />
                        <label htmlFor="cursando" className={styles.radioLabel}>
                            Cursando
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="radio"
                            id="concluido"
                            value="concluido"
                            {...register("estado", { required: true })}
                        />
                        <label
                            htmlFor="concluido"
                            className={styles.radioLabel}
                        >
                            Concluído
                        </label>
                    </div>
                </div>

                <button type="submit" className={styles.button}>
                    Salvar
                </button>
            </form>
        </div>
    )
}
