import styles from "../styles/components/EditDisciplina.module.css"
import {BsFillXSquareFill} from "react-icons/bs"


export function EditDisciplina() {
    return(
        <div className={styles.container}>
            <form className = {styles.form}>
                <span className = {styles.cancel}><BsFillXSquareFill size = "20px" color = "#DA0037" /></span>
                <label htmlFor="nomeCurso" className = {styles.label}>Nome da Disciplina</label>
                <input type="text" id="nomeCurso" className = {styles.input}/>

                <label htmlFor="qntPeriodos" className = {styles.label}>Quantidade de Periodos</label>
                <input type="text" id="qntPeriodos" className = {styles.input} />

                <button type="submit" className = {styles.button}>Salvar</button>

            </form>
        </div>
    )
}