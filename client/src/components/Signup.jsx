import React,{useEffect,useState} from "react"
import {NavLink, useHistory} from 'react-router-dom';
const axios = require('axios').default;

export default function Signup(props){

  const [four,setFour]=useState("panel__content");
  const [info,setInfo]=useState(null);

  let history = useHistory();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  function handleChange(event) {
    const { name, value } = event.target; 
    setSignup(prevSignup => {
      return {
        ...prevSignup,
        [name]: value
      };
    });
    if(info!=null)
    setInfo(null)
  }

  function register(){
    axios.post(" /api/user",{
     "name": signup.name,
     "email": signup.email,
     "password": signup.password
    })
    .then(function (response) {
      if(response.data==="Sucessfully added a new user"){
      localStorage.setItem("email",signup.email)
      history.push("/main")
      }
      else
      setInfo(response.data)
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
     
    });  
    }

  useEffect(()=>{
    window.scrollTo(0,100)
    setTimeout(()=>{setFour("panel__content panel__content--active")},10)
  },[]);

  
  

    return(
      <section className="panel b-green" id="4">
          <article className="panel__wrapper">
            <div className={four}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="contact-content">
                      <div className="heading">
                        <h4>Signup</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="contat-form">
                            <div id="contact" >
                            <fieldset>
                                <input name="name" onChange={handleChange} value={signup.name} type="text" className="form-control" id="name" placeholder="Your Name" required=""/>
                              </fieldset>
                              <fieldset>
                                <input name="email" onChange={handleChange} value={signup.email} type="email" className="form-control" id="email" placeholder="Email" required=""/>
                              </fieldset>
                              <fieldset>
                                <input name="password" onChange={handleChange} value={signup.password} type="password" className="form-control" id="password" placeholder="Password" required=""/>
                              </fieldset>
                              {/* <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                              </fieldset> */}
                              <fieldset>
                                <button  id="form-submit" className="btn" onClick={()=>register()}>Signup</button>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                            {info===null?<p>Signup to and add new documents.<br/><em>and access your douments,<br/>if allready register go to <NavLink to="/login" color="#fa5252">Login</NavLink>.</em></p>:info}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="footer">
                      <p>Copyright &copy; 2020 Ankur Dwivedi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
    )
}
