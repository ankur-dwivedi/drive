import React,{useEffect,useState} from "react"
const axios = require('axios').default;

export default function Home(props){

 
  const [one,setOne]=useState("panel__content");
  const [two,setTwo]=useState("panel__content");
  const [three,setThree]=useState("panel__content");
  const [four,setFour]=useState("panel__content");

  


  function isInViewport(el) {
    if(el!==null){
    const rect = el.getBoundingClientRect();
    console.log( el,rect)
    return (
        (rect.top >= -rect.height/1.7  && rect.top <= 0 )|| (rect.top >= 0 && rect.top <= rect.height/1.7)
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
    
    }
    console.log(el)
    
}






document.addEventListener('scroll', function () {
  const one_ = document.querySelector(".b-blue");
  const two_ = document.querySelector(".b-yellow");
  const three_ = document.querySelector(".b-red");
  const four_= document.querySelector(".b-green");
    isInViewport(one_) ?setOne("panel__content panel__content--active"):setOne("panel__content");
    isInViewport(two_) ?setTwo("panel__content panel__content--active"):setTwo("panel__content");
    isInViewport(three_) ?setThree("panel__content panel__content--active"):setThree("panel__content");
    isInViewport(four_) ?setFour("panel__content panel__content--active"):setFour("panel__content");


}, {
    passive: true
});
    return(
    
    
    <div>
        

        <section className="panel b-blue" id="1">
          <article className="panel__wrapper">
            <div className={one}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="home-content">
                      <div className="home-heading">
                        <h1><em>Stak</em> HTML CSS</h1>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="home-box-content">
                            <div className="left-text">
                              <h4>New <em>Stacked</em> Template</h4>
                              <p>Stacked HTML CSS Template is provided by TemplateMo website. You can edit and use this template for any purpose. Please mention your friends about our website. Thank you.</p>
                              <div className="primary-button">
                                <a href="#2">Discover More</a>
                              </div>
                            </div>
                            <div className="right-image">
                              <img src="img/right-home-image.png" alt=""/>
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
        <section className="panel b-yellow" id="2" onFocus={()=>alert("2")}>
          <article className="panel__wrapper">
            <div className={two} >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="about-content">
                      <div className="heading">
                        <h4>About us</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="about-box-content">
                            <img src="img/about-image.png" alt=""/>
                          </div>
                        </div>
                        <div className="col-md-7 col-md-offset-5">
                          <div className="about-box-text">
                            <h4>Curabitur varius sapien</h4>
                            <p>Please feel free to contact us if you have any question or suggestion about our free templates. Thank you. Template redistribution is <strong>NOT allowed</strong>.</p>
                            <div className="primary-button">
                              <a href="#3">Discover More</a>
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
        <section className="panel b-red" id="3">
          <article className="panel__wrapper">
            <div className={three}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="projects-content">
                      <div className="heading">
                        <h4>Recent Projects</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="owl-carousel owl-theme projects-container">
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-01.jpg" data-lightbox="image-1"><img src="img/project-item-01.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Work Smart</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-02.jpg" data-lightbox="image-1"><img src="img/project-item-02.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Creative Idea</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-03.jpg" data-lightbox="image-1"><img src="img/project-item-03.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>New Thought</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-04.jpg" data-lightbox="image-1"><img src="img/project-item-04.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Next Moment</h4>
                                  <p>Lorem ipsum dolor sit amet, adipis scing elit etiam sit amet ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-05.jpg" data-lightbox="image-1"><img src="img/project-item-05.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Artwork</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-06.jpg" data-lightbox="image-1"><img src="img/project-item-06.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Sixth Box</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="project-item">
                                <a href="img/project-item-07.jpg" data-lightbox="image-1"><img src="img/project-item-07.jpg" alt=""/></a>
                                <div className="text-content">
                                  <h4>Item #7</h4>
                                  <p>Lorem ipsum dolor, adipis scing elit etiam ante vehicula, aliquam mauris in, luctus neque.</p>
                                  <div className="primary-button">
                                    <a href="#">Discover More</a>
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
              </div>
            </div>
          </article>
        </section>
        <section className="panel b-green" id="4">
          <article className="panel__wrapper">
            <div className={four}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="contact-content">
                      <div className="heading">
                        <h4>Contact us</h4>
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
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                              <fieldset>
                                <button type="submit" id="form-submit" className="btn">Send Message</button>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                            <p>Nunc purus ligula, ullamcorper id velit id, vestibulum auc sapien. Sed quis mauris eget sem imperdiet rhoncus.<br/><br/>
                            <em>880 Etiam mauris erat,
								<br/>Vestibulum eu augue nec, 10940</em></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="footer">
                      <p>Copyright &copy; 2020 Your Company 
                      | Design: TemplateMo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"></script>')</script>
       
        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script> */}

    </div>

     
    )
}