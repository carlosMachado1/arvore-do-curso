import Link from "next/link"
import {useState} from "react"
import SideMenuProps from "../interfaces/sideMenu"
import styles from "../styles/components/SideMenu.module.css"
import {BsPeopleCircle, BsFillCaretRightFill} from 'react-icons/bs'



export function SideMenu(props: SideMenuProps) {
    const [editarPerfil, setEditarPefil] = useState(true)

    function editProfile() {
        setEditarPefil(true)
    }


    return (
        <div className = {styles.container}>

            <div className = {styles.profile} onClick = {editProfile}>
                <div className = {styles.profileIcon}><BsPeopleCircle size = "25px" color = "#EEE" /></div>
                <div className = {styles.profileText}>{props.nome}</div>
                <div className = {styles.profileIconArrow}><BsFillCaretRightFill color = "#EEE" /></div>
            </div>

            <div className = {styles.cursos}>
                <Link href="/principal/cursos"><a className = {styles.link}>Cursos</a></Link>
            </div>

            <div className = {styles.disciplinas}>
                <Link href="/principal/disciplinas"><a className = {styles.link}>Disciplinas</a></Link>
            </div>
        </div>
    )
}
