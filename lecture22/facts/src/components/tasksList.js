import { useContext } from "react"
import ThemeContext from "../themeContext"

import Task from "./task"

export default function TasksList(props){
    const theme = useContext(ThemeContext)

    return (
        <ul className={"taskslist " +  theme}>
        {
            props.tasks.map((task, i) => <Task task={task} key={i}/>)
        }
        </ul>
    )
}