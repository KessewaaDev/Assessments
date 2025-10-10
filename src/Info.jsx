import React from 'react'
import Navbar from './Navbar'
import autumn from '/autumn.svg'

const Info = () => {
    const logo = {
        src: autumn,
        path: "/" 
};
    const info = [
        
    {
        id:1,
        title: "Providers",
        path:"/providers",
        showText:true

    },
    {
        id:2,
        title: "Guides",
        path:"/guides",
        showText:true

    },
    {
        id:3,
        title: "Memorials",
        path: "/memorials",
        showText:true
    },
    {
        id:4,
        title: "Library",
        path: "/library",
        icon: "loupe.png",
        showText:false

    },
    {
        id:5,
        title: "pofile",
        path: "/profile",
        icon: "user.png",
        showText:false
    }
 ]
  return (
 
    
        <Navbar data={info} logos={logo}/>
    
  )
}

export default Info