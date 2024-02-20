import React from 'react';
import catHeader from './img/catHeader.png';
import userFeedback from './img/userFeedback.png'
import catFeedback from './img/catFeedback.png'
function App() {

  return (
    <>
      <header id="title">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-sm navbar-dark">
        <a className="navbar-brand" href="#">Cats Chat</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Plans</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta">Download</a>
              </li>
          </ul>
      </div> 
      </nav>
  <div className="row">
    <div className="col-lg-6">
      <h1>Find a cat to be your best friend!</h1>
      <button className="download-button btn btn-outline-light btn-lg"><i className="fa-brands fa-apple"></i>Download</button>
      <button className="download-button btn btn-outline-light btn-lg"><i className="fa-brands fa-google-play"></i>Download</button>
    </div>
     <figure className="col-lg-6">
        <img className="imgGato" src={catHeader} alt="Cat on Header"/>
        <img src='../../'></img>
     </figure>
    </div>
 </div>
    </header>
    
    <section id="features">
    <div className="row">

      <div className="feature-box col-lg-4">
        <i className="icon fa-solid fa-circle-check fa-4x"></i>
        <h3>Easy to use</h3>
        <p>So easy that even the cats can use!</p>
      </div>

      <div className="feature-box col-lg-4">
        <i className="icon fa-solid fa-cat fa-4x"></i>
        <h3>The best cats</h3>
        <p>We have the best cats for you.</p>
      </div>

      <div className="feature-box col-lg-4">
        <i className="icon fa-solid fa-heart fa-4x"></i>
        <h3>Cats loves!!</h3>
        <p>And we love them too.</p>
      </div>
    </div>
    </section>
    <section id="testimonials">
 <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
   <div className="carousel-inner">
    <div className="carousel-item active">
      <h3>Very good, the system is awesome to find a cat.</h3>
        <img className="imgCliente" src={userFeedback} alt="User feedback"/>
        <em>Rio de Janeiro, Brazil</em>
    </div>
    <div className="carousel-item">
      <h3>The humans in this app loves me!</h3>
        <img className="imgCliente" src={catFeedback} alt="Cat feedback"/>
        <em>Rio de Janeiro, Brazil</em>
    </div>
  </div>
  <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-bs-slide="next">
     <span className="carousel-control-next-icon"></span>
  </a>
 </div>     
    </section>
    <section id="pricing">
        <h2>Plans for all needs</h2>
        <p>Simple and accessible pricing plans!</p>
      <div className="row">
      <div className="pricing-column col-sm-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3>Basic plan</h3>
          </div>
          <div className="card-body d-grid">
            <h2>Free</h2>
            <p>5 likes per day</p>
            <p>50 messages per day</p>
            <p>Access to the main features</p>
            <button className="btn btn-lg btn-dark"type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pricing-column col-sm-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3>Extra plan</h3>
          </div>
          <div className="card-body d-grid">
            <h2>US$ 4,00 / month</h2>
            <p>Unlimited likes and messages</p>
            <p>Direct access to the support team</p>
            <p>Full access to the app</p>
            <button className="btn btn-lg btn-dark" type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pricing-column col-sm-12 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3>Premium plan</h3>
          </div>
          <div className="card-body d-grid">
            <h2>US$ 8,00 / month</h2>
            <p>Likes and messages with priority</p>
            <p>Priority on support</p>
            <p>Extra options to stylize the app</p>
            <button className="btn btn-lg btn-dark" type="button">Subscribe</button>
          </div>
        </div>
      </div>  
      </div>  
    </section>
    <section id="cta">
        <h3 className="cta-heading">Download right now!</h3>
        <button className="download-button btn btn-outline-light btn-lg"><i className="fa-brands fa-apple"></i>Download</button>
        <button className="download-button btn btn-outline-light btn-lg"><i className="fa-brands fa-google-play"></i>Download</button>
    </section>
    <footer id="footer">
      <i className="social-icon fa-brands fa-facebook-f"></i> 
      <i className="social-icon fa-brands fa-twitter"></i>
      <i className="social-icon fa-brands fa-instagram"></i>
      <h6>© Copyright 2024 App Cats Chat </h6>
    </footer>
  </>
  )
}

export default App
