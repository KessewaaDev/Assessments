import { Outlet } from "react-router-dom"
import '../App.css'
import Info from "../Info"


const Rootlayout = () => {
  return (
    <>
      <Info/>
      <Outlet />
    </>
  )
}

export default Rootlayout