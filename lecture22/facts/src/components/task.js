import { useContext } from "react"
import ThemeContext from "../themeContext"

export default function Task(props){
    const theme = useContext(ThemeContext)
    return (
        <li style={{
            padding: 5, 
            border: "1px solid grey", 
            borderRadius: "20px", 
            maxWidth: 500, 
            margin: 5
        }} className={"task " + theme}>{props.task}</li>
    )
}