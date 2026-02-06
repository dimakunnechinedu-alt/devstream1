import './App.css'
import './Mediaquerry.css'
import { Routes,Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';

import Home from './pages/Home.jsx';
import Articles from './pages/Articles.jsx';
import AddStory from './pages/AddStory.jsx';
import ArticleDetails from './pages/ArticleDetails.jsx';
import NotFound from './pages/NotFound.jsx';




function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
           <Route path='/' element={<Home/>}/>
            <Route path='articles' element={<Articles/>}/>
             <Route path='articles/:id' element={<ArticleDetails/>}/>
             <Route path='add-story' element={<AddStory/>}/>
             <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
