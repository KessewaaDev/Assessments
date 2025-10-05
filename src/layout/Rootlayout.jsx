import { Outlet } from "react-router-dom"
import '../App.css'
import Info from "../Info"


const Rootlayout = () => {
  return (
    <div>
        <header className="app-container">
            <Info/>
        </header>
        
        <main className="content-area">
            <Outlet />
        </main>

    </div>
  )
}

export default Rootlayout