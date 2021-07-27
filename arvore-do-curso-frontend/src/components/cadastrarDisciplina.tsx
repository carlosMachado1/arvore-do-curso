import styles from "../styles/components/EditCourse.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { BsFillXSquareFill } from "react-icons/bs"
import { useRouter } from "next/router"
import CadastrarDisciplinaID from "../interfaces/cadastrarDisciplinaID"

export function CadastrarDisciplina() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<CadastrarDisciplinaID>()
    const onSubmit: SubmitHandler<CadastrarDisciplinaID> = async (data) => {
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
                    Periodo
                </label>
                <input
                    type="text"
                    id="qntPeriodos"
                    className={styles.input}
                    {...register("periodo", { required: true })}
                />

                <label htmlFor="preRequisito" className={styles.label}>
                    Pre-Requisito
                </label>
                <input
                    type="text"
                    id="preRequisito"
                    className={styles.input}
                    {...register("preRequisitos", { required: true })}
                />

                <button type="submit" className={styles.button}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
