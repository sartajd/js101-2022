import "./articleCard.css"
import { NavLink } from "react-router-dom"

export default function ArticleCard(props){
    return (
        <div className="card">
            <div className="author">Author name</div>
            <NavLink to={"/" + props.article.id}>
                <h2 className="title">{props.article.title}</h2>
            </NavLink>
        </div>
    )
}