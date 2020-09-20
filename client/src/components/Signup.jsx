import React,{useEffect,useState} from "react"
import { NavLink,useHistory} from 'react-router-dom';

export default function Signup(props){

  const [four,setFour]=useState("panel__content");

  let history = useHistory();

  

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
                            <form id="contact" action="" method="post">
                            <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required=""/>
                              </fieldset>
                              <fieldset>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email" required=""/>
                              </fieldset>
                              <fieldset>
                                <input name="password" type="password" className="form-control" id="password" placeholder="Password" required=""/>
                              </fieldset>
                              {/* <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                              </fieldset> */}
                              <fieldset>
                                <button type="submit" id="form-submit" className="btn" onClick={()=>history.push("/main")}>Signup</button>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                            <p>Signup to access your douments.<br/><br/>
                            <em>and add new documents,
                            <br/>if allready register go to Login.</em></p>
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
