import ContentProps from "../interfaces/contentProps"
import styles from "../styles/components/Content.module.css"
import {
    BsSearch,
    BsPlus,
    BsPlusSquare,
    BsPencilSquare,
    BsTrash,
} from "react-icons/bs"

export function Content(props: ContentProps) {
    const teste = [
        {
            nome: "Engenharia de Computação",
        },
        {
            nome: "Engenharia Eletrica",
        },
        {
            nome: "Engenharia Civil",
        },
    ]

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

                <span className={styles.addIcon}>
                    {" "}
                    <BsPlusSquare size="30px" />
                </span>
            </div>

            <div className={styles.data}>
                {teste.map((item, index) => {
                    return (
                        <div key={index} className={styles.dataRow}>
                            <div className={styles.dataName}>{item.nome}</div>
                            <div>
                                <span>
                                    <BsPencilSquare size="20px" />
                                </span>
                                <span>
                                    <BsTrash size="20px" />
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
