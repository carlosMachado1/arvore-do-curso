import styles from "../styles/components/EditCourse.module.css"
import {BsFillXSquareFill} from "react-icons/bs"
import { useRouter } from 'next/router'


export function EditCourse() {
    const router = useRouter()

    function handleClick() {
        router.reload()
    }
    return(
        <div className={styles.container}>
            <form className = {styles.form}>
                <span className = {styles.cancel} onClick={handleClick}><BsFillXSquareFill size = "20px" color = "#DA0037" /></span>
                <label htmlFor="nomeCurso" className = {styles.label}>Nome do Curso</label>
                <input type="text" id="nomeCurso" className = {styles.input}/>

                <label htmlFor="qntPeriodos" className = {styles.label}>Quantidade de Periodos</label>
                <input type="text" id="qntPeriodos" className = {styles.input} />

                <button type="submit" className = {styles.button}>Salvar</button>

            </form>
        </div>
    )
}