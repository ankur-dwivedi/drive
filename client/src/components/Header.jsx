import React from "react"

export default function Header(){
    return(
        <header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">A Web Application that shows list of users through a api , application is made using React.js Node.js Express.js . </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">9193363429</a></li>
            <li><a href="#" className="text-white">ankur.dwivedi199714@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
      <a href="/" className="navbar-brand d-flex align-items-center">
        <strong>TimeSlot</strong>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
    )
}