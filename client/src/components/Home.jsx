import React,{useEffect,useState} from "react"
import Card from "./Card.jsx"
const axios = require('axios').default;

export default function Home(props){

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
                 <Card key={item.id} item={item}/>
                )
              })}
             
             
      
            </div>
          </div>
        </div>
      
      </main>
      
     
    )
}
    // "start": "cd client && npm install && npm run build && cd ../ && node server",
