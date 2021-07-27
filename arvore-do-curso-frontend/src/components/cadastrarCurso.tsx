import styles from "../styles/components/EditCourse.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { BsFillXSquareFill } from "react-icons/bs"
import { useRouter } from "next/router"
import CursosID from "../interfaces/cursosID"

export function CadastrarCurso() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<CursosID>()
    const onSubmit: SubmitHandler<CursosID> = async (data) => {
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
                    Salvar
                </button>
            </form>
        </div>
    )
}
