import React,{useEffect,useState,useRef} from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useHistory} from 'react-router-dom';
const axios = require('axios').default;

export default function Main(props){

 
  const [one,setOne]=useState("panel__content panel__content--active");
  const [two,setTwo]=useState("panel__content");
  const [three,setThree]=useState("panel__content ");
  const [four,setFour]=useState("panel__content");
  const [uploadText,setuploadText]=useState("UPLOAD");
  const [info,setInfo]=useState("Choose a file and click on upload.");
  const [data,setData]=useState([]);
  const input=useRef()
  const search=useRef()
  let history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("email"))
          history.push("/")
    loadData()
  },[])

  function loadData(){
    axios.post("/api/file",{
      "email": localStorage.getItem("email"),
      "file": search.current.value?search.current.value:""
     })
     .then(function (response) {
      console.log(response.data)
       let temp=[]
       for(let x=0;x<Object.keys(response.data).length;x++){
         let fileDisplay=response.data[x].filename.substring(response.data[x].filename.indexOf("-")+1)
        temp.push(
                    <div>
                      <div className="project-item">
                        {/* <a href="img/project-item-01.jpg" data-lightbox="image-1"><img src="img/project-item-01.jpg" alt=""/></a> */}
                        <div className="text-content">
                            <h4>{fileDisplay && fileDisplay.length>17?fileDisplay.substring(0,17)+"...":fileDisplay}</h4>
                            <br/>
                             {localStorage.getItem("email")==="admin@gmail.com"?response.data[x].filename.split("-")[0]:""}
                              <br/> <br/><br/>
                              {localStorage.getItem("email")==="admin@gmail.com"?"":<br/>}
                            <div className="primary-button">
                                  <a onClick={()=>download(response.data[x].filename)}>Download</a>
                            </div>
                        </div>
                      </div>
                    </div>
        )
       }
       setData(temp)
       
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  function download(file){
    
    axios.post("/api/file/download",{
      "filename": file
     })
     .then(function (response) {
      console.log(response.data)
      window.open("https://sleepy-brook-02674.herokuapp.com/download/"+file)
      // window.open("http://localhost:5000/download/"+file)
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  function isInViewport(el) {
    if(el!==null){
    const rect = el.getBoundingClientRect();
    return (
        (rect.top >= -rect.height/1.7  && rect.top <= 0 )|| (rect.top >= 0 && rect.top <= rect.height/1.7)
    );
    
    }
    
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


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 3000 },
    items: 20,


  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

var bodyFormData = new FormData();
function handleChange(event) {
  setInfo("Choose a file and click on upload.")
  bodyFormData.append('file', input.current.files[0]);
}


function upload(){
  if(uploadText==="UPLOAD"){
    if(input.current.files[0]){
  setuploadText("uploading...")
  axios.post(" /api/currrent_user",{
    "email": localStorage.getItem("email")
   })
   .then(function (response) {
    
   })
   .catch(function (error) {
     console.log(error);
   });
  axios({
    method: 'post',
    url: '/api/upload',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        console.log(response);
        input.current.value = null
        setuploadText("UPLOAD")
        setInfo("Choose a file and click on upload.")
        loadData()
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
  else
  setInfo("Choose a file to continue...")
  }
  else
  setInfo("File is uploading please wait...")
  }

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
                        <h1><em>Virtual</em>Drive</h1>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="home-box-content">
                            <div className="left-text">
                              <h4>New <em>Virtual</em> Drive</h4>
                              <p>Upload your document and keep it safe in Virtual Drive , click on upload to add new documents.</p>
                              <div className="primary-button">
                              <a href="#4">Upload</a>
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
        <section className="panel b-yellow" id="2" >
          <article className="panel__wrapper">
            <div className={two} >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="about-content">
                      <div className="heading">
                        <h4>Profile</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="about-box-content">
                            <img src="img/home2.jpg" alt=""/>
                          </div>
                        </div>
                        <div className="col-md-7 col-md-offset-5">
                          <div className="about-box-text">
                            <h4>{localStorage.getItem("email")}</h4>
                            <p>Welcome <strong>{localStorage.getItem("email")}</strong> access your documents from anywhere at any time.</p>
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
                    <div className="projects-content " >
                      <div className="heading" style={{paddingTop:"10%"}}>
                        <h4>Documents</h4>
                        <div style={{width: "75%",paddingLeft:"25%"}}>
                          <div className="contat-form ">
                            <div id="contact" >                  
                            <input name="search" ref={search} type="text" className="form-control" id="email" placeholder="Enter filename" required=""/>
                             <br/>
                                <button className="btn" onClick={loadData} style={{marginBottom:"20%"}}>Search</button>
                               
                            </div>
                          </div>
                        </div>

                            
                      </div>
                      <div className="row">
                        <div className="col-md-12" style={{height:"28rem"}}>
                    
                            <Carousel responsive={responsive}
                                        showDots={true}
                                        arrows={true}
                                        additionalTransfrom={0}
                                        centerMode={false}
                                        className="owl-carousel owl-theme projects-container"
                                        containerClass="container-with-dots"
                                        autoPlay={ false}
                                        autoPlaySpeed={4500}
                                        dotListClass=""
                                        draggable={true}
                                        focusOnSelect={false}
                                        infinite
                                        itemClass=""
                                        keyBoardControl
                                        minimumTouchDrag={80}
                                        renderButtonGroupOutside={false}
                                        renderDotsOutside={true}
                                        >
                                        {data}
                                              </Carousel>
                                             
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
                        <h4>Upload Document</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="contat-form">
                            {/* <form id="contact" action="/api/upload" method="POST" enctype="multipart/form-data"> */}
                             <div>
                              <input type="file" name="file" id="file" onChange={handleChange} ref={input} class="custom-file-input" accept=".pdf"/>
                              {/* <label for="file" class="custom-file-label">Choose File</label> */}
                              <fieldset>
                                <button  id="form-submit" className="btn" onClick={upload}>{uploadText}</button>
                              </fieldset>
                            </div>
                            {/* </form> */}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                            <p>{info}</p>
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
    </div>

     
    )
}
