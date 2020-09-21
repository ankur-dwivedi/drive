import React,{useEffect,useState} from "react"
import { NavLink,useHistory} from 'react-router-dom';

export default function Home(props){

  const [one,setOne]=useState("panel__content");

  let history = useHistory();

  

  useEffect(()=>{
    setTimeout(()=>{setOne("panel__content panel__content--active")},10)
      
    
  },[]);
  useEffect(()=>{
      if(localStorage.getItem("email"))
          history.push("/main")
    
  },[]);

  const flick=()=>{
    setOne("panel__content ")
    setTimeout(()=>{setOne("panel__content panel__content--active")},100)
  }
  
  

    return(
      <div>
      <section className="panel b-blue" id="1" >
        <article className="panel__wrapper">
          <div className={one}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="home-content">
                    <div className="home-heading" onClick={flick} style={{cursor:"pointer"}}>
                      <h1><em>Virtual</em> Drive</h1>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="home-box-content" style={{padding:"60px",backgroundColor:"rgba(64, 81, 104, 0.42)"}}>
                          <div className="left-text"style={{width:"100%"}}>
                            <div className="primary-button" style={{textAlign:"justify"}}>
                              <NavLink to="/login" style={{width:"20rem",height:"6rem",textAlign:"center",fontSize:"initial",paddingTop:"17px",display:"inline-block",backgroundColor:"rgba(179, 30, 35, 0.9)"}}>Login</NavLink>
                              <span style={{margin:"2rem",color:"#fff"}}>or</span> 
                               <NavLink to="/signup" style={{width:"20rem",height:"6rem",textAlign:"center",fontSize:"initial",paddingTop:"17px",display:"inline-block",backgroundColor:"rgba(179, 30, 35, 0.9)"}}>Sign up</NavLink>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
     
      </div>
    )
}
