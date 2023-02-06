import { useEffect, useState } from "react";
import ArticleCard from "../components/articleCard";
import Loader from "../components/loading";
import QuoteSection from "../components/quote";
import "./home.css"
export default function Home(){
    const [articles, setArticles] = useState(null)

    // load articles from server
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setArticles(data))   
    }, [])

    if(articles === null){
        return <Loader />
    }

    return (
        <>
            <h1>Home page</h1>
            <QuoteSection />
            <div className="container">
                {
                    articles.map(article => {
                        return <ArticleCard key={article.id} article={article}/>
                    })
                }
            </div>
        </>

    )
}