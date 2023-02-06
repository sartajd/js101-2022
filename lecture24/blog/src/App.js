import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ArticlePage from "./pages/article";
import NotFound from "./pages/notFound";
import CommentsPage from "./pages/comments";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<ArticlePage />} />
        <Route path="/:id/comments" element={<CommentsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
