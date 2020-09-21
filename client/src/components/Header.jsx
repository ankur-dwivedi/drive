import React,{useState} from "react"
import { useHistory} from 'react-router-dom';

export default function Header(){

  const [navItem,setNavItem]=useState("nav__list");
  const [nav,setNav]=useState("burger");
  let history = useHistory();

    return(
      <nav className="nav" onClick={()=>{if(navItem==="nav__list"){
        setNavItem("nav__list nav__list--active")
        setNav("burger burger--active")
      }
        else{
        setNavItem("nav__list")
        setNav("burger")}}}>
        <div className={nav}>
          <div className="burger__patty"></div>
        </div>

        <ul className={navItem}>
          <li className="nav__item">
            <a href="#1" className="nav__link c-blue"><img src="img/home-icon.png" alt=""/></a>
          </li>
          <li className="nav__item">
            <a href="#2" className="nav__link c-yellow scrolly"><img src="img/about-icon.png" alt=""/></a>
          </li>
          <li className="nav__item">
            <a href="#3" className="nav__link c-red"><img src="img/projects-icon.png" alt=""/></a>
          </li>
          <li className="nav__item">
            <a href="#4" className="nav__link c-green"><i class="fa fa-plus" aria-hidden="true" style={{color:"white"}}></i></a>
          </li>
          <li className="nav__item">
            <a  className="nav__link c-green" onClick={()=>{localStorage.clear();history.push("/")}}><i class="fa fa-sign-out" aria-hidden="true" style={{color:"white"}}></i></a>
          </li>
        </ul>
      </nav>

    )
}