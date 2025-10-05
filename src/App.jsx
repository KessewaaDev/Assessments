

import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Info from './Info'
import Guides from './pages/Guides'
import Home from './pages/Home'
import Library from './pages/Library'
import Memorials from './pages/Memorials'
import Providers from './pages/Providers'
import Search from './pages/Search'
import Rootlayout from './layout/Rootlayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Rootlayout />}>
        <Route index element ={<Home />} />
        <Route path='guides' element ={<Guides />}/>
        <Route path='library'  element = {<Library />}/>
        <Route path='memorials' element = {<Memorials />}/>
        <Route path='providers' element = {<Providers />}/>
        <Route path='search' element ={<Search />}/>

      </Route>
    )
  )
  
  
  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
