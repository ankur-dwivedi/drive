import React,{useState} from "react"
import Modal from "react-bootstrap/Modal";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const axios = require('axios').default;

export default function Card(props){

    let d=new Date();
  const [show,setShow] = useState(false);
  const [date,setDate] = useState(d);
  const [calenderDisplay,setCalenderDisplay]=useState("none");
  const [result,setResult] = useState("");


  let month=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]

  const handleClose3 =()=>{setShow(false)}
  const handleShow3 =()=>setShow(true);
  
  const onChange = date =>{ setDate(date);setCalenderDisplay("none")}

  
  let item=props.item

  React.useEffect(()=>{
      let day=date.getDate()
      let m=month[date.getMonth()]
      let year=date.getFullYear()
      let temp2=[]
      temp2[0]=( <p style={{fontSize:"1rem"}}>{"Active on"}</p>)
      for(let x=0;x<item.activity_periods.length;x++){
          let temp=item.activity_periods[x].start_time.split(" ");
          if(m==temp[0] && day==temp[1] && year==temp[2]){
              temp2.push(
                <p style={{fontSize:"0.9rem",fontStyle:"bold"}}><span style={{color:"green"}}>{item.activity_periods[x].start_time}</span><span>{" till "}</span><span style={{color:"red"}}>{item.activity_periods[x].start_time}</span></p>
              )
          }
      }
      if(temp2.length!=1)
      setResult(temp2)
      else
      setResult(<p style={{fontSize:"0.9rem"}}>{item.real_name+" was not active on "+day+" "+m+" "+year}</p>)
  },[date])
    
 

    return(
        // <spam>
        <div className="col-md-4" style={{cursor:"pointer"}} onClick={()=>handleShow3()}>
        <div className="card mb-4 shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.real_name}</text>
          <text x="50%" y="75%" fill="#fcb603" dy=".1em" >{item.id}</text>
          <text x="50%" y="85%" fill="#eceeef" dy=".1em">{item.tz}</text>
          </svg>
          
        </div>
        
        <Modal show={show}  onHide={handleClose3} style={{top:"7rem"}}>
              <Modal.Header style={{ backgroundColor: "#F0F0F0" }}>
                <Modal.Title style={{fontSize:"1rem"}}>{item.real_name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              <div className="row ">
                <div className="col ">
                <i class="fa fa-calendar" aria-hidden="true" style={{color:"blue"}} onClick={()=>calenderDisplay==="none"?setCalenderDisplay(""):setCalenderDisplay("none")}></i>
                <p style={{fontSize:"0.8rem",color:"blue", display:"inline-block",marginLeft:"2rem",cursor:"pointer"}} onClick={()=>calenderDisplay==="none"?setCalenderDisplay(""):setCalenderDisplay("none")}>{date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</p>
                <center>
                {result}
                <span style={{display:calenderDisplay}}>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
                </span>
                  </center>


                </div>
               
              </div>
             
                </Modal.Body>
              <Modal.Footer style={{ border: "0" }}>
              <p style={{fontSize:"0.9rem",color:"red", display:"inline-block",marginTop:"2rem"}} >{"press Esc or back button to exit"}</p>

               </Modal.Footer>
            </Modal>
      </div>
     
     
    )
}
    // "start": "cd client && npm install && npm run build && cd ../ && node server",
