

import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom'
import Guides from './pages/Guides'
import Home from './pages/Home'
import Library from './pages/Library'
import Memorials from './pages/Memorials'
import Providers from './pages/Providers'
import Search from './pages/Search'
import Rootlayout from './layout/Rootlayout'
import Info from './Info'
import Deathguide from './pages/Deathguide'
import Funeralguide from './pages/Funeralguide'
import SettleEstate from './pages/SettleEstate'
import Supportmental from './pages/Supportmental'
import Plan from './pages/Plan'
import About from './pages/About'

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

         <Route path='guides/immediately-after-death' element={<Deathguide />} />
        <Route path='guides/funeral-planning' element={<Funeralguide />} />
        <Route path = 'about' element = {<About />} />
        

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
