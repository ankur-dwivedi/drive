import React,{useEffect,useState} from "react"
import {NavLink, useHistory} from 'react-router-dom';
const axios = require('axios').default;

export default function Login(props){

  const [four,setFour]=useState("panel__content");

  const [info,setInfo]=useState(null);

  let history = useHistory();
  const [signup, setSignup] = useState({
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
    axios.post(" /api/login",{
     "email": signup.email,
     "password": signup.password
    })
    .then(function (response) {
      console.log(response)
      if(response.data==="Sucessfully logged in"){
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
                        <h4>Login</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="contat-form">
                            <div id="contact" >
                             
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
                                <button  id="form-submit" className="btn" onClick={register}>Login</button>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                            
                            {info===null?<p>Login to access your douments, and add new documents<br/><em> if not register go to <NavLink to="/signup" color="#fa5252">Signup</NavLink>.</em></p>:info}

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
