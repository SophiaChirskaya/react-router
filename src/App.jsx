
// import './App.css'


// Import degli elementi gestione rotte
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import PostCreatePage from "./pages/PostCreatePage";
import PostsDetailPage from "./pages/PostsDetailPage";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/posts'>
          <Route index element={<PostsPage />} />
          <Route path="create" element={<PostCreatePage />} />
          <Route path=":id" element={<PostsDetailPage />} />
        </Route>

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
