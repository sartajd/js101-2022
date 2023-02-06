import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Loader from "../components/loading"

export default function ArticlePage(){
    const {id} = useParams()
    const [article, setArticle] = useState(null)

    const navigate = useNavigate()


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => res.json())
        .then(data => setArticle(data))

    }, [id])

    if(!article){
        return <Loader />
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>back</button>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </>
    )
}