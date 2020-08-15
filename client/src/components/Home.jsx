import React,{useEffect,useState} from "react"
const axios = require('axios').default;

export default function Home(){

  const[user,setUser]=useState([])

  useEffect(()=>{
    axios.get("/api/demo")
    .then((response) => {
      setUser(response.data.members)
      console.log(response)

    })
    .catch(function (error) {
      console.log(error);
    })
    
  },[]);

    return(
    <main role="main">
      
        <section className="jumbotron text-center" style={{margin:0}}>
          <div className="container">
            <h1>TimeSlot</h1>
            <p className="lead text-muted">Click on the card to view aactivity of user ,all registered users will be shown below </p>
           
          </div>
        </section>
      
        <div className="album py-5 bg-light" >
          <div className="container">
      
            <div className="row">
              {user.map((item)=>{
                return(
                  <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                  <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.real_name}</text>
                  <text x="50%" y="75%" fill="#fcb603" dy=".1em" >{item.id}</text>
                  <text x="50%" y="85%" fill="#eceeef" dy=".1em">{item.tz}</text>
                  </svg>
                  
                </div>
              </div>
                )
              })}
             
             
      
            </div>
          </div>
        </div>
      
      </main>
      
     
    )
}
    // "start": "cd client && npm install && npm run build && cd ../ && node server",
