
// import './App.css'


// Import degli elementi gestione rotte
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
