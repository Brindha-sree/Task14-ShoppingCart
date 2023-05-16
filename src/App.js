import React from 'react';
import './App.css';
import blackberry from './blackberry.png'
import mango from './mango.png'
import orange from './Orange.png'
import avacado from './Avocado.png'
import dates from './Dates.png'
import grape from './Grape.png'
import lemom from './lemon.png'
import pomo from './pomegranate.png'

function Shopping() {
  return (
    <div className="container">
     <header>
      <h1>Shopping Cart</h1>
     </header>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Adout</a>
        </li>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Shop
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
       
      </ul>
      <form class="d-flex">
      <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
</button>
      </form>
    </div>
  </div>
</nav>
<div className="side-heading" class="heading">
  <h2>Shopping More
  <p>Fruit is nature’s candy.
 Fruits make you strong.</p>
 </h2>
</div>
<div className="row row-cols-1 row-cols-md-4">
<div className='card text-center'>
  <img src={mango}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Mango</h5>
    <p class="card-text"> ₹. 120</p>
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>


<div className='card text-center'>
  <img src={blackberry} class="card-img-top-center" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Blackberry</h5>
    <p class="card-text"> ₹. 400 - ₹. 600</p>
    <a href="#" class="btn btn-success">View Options</a>
  </div>
</div>

<div className='card text-center'>
  <img src={orange} class="card-img-top-center" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Orange</h5>
    <p class="card-text"> ₹. 150</p>
    <i class='fa fa-star yellow-color' ></i>
      <i class='fa fa-star yellow-color' ></i>
      <i class='fa fa-star yellow-color'></i>
      <i class='fa fa-star yellow-color'></i>
      <i class='fa fa-star  yellow-color'></i>
      <br/>
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>


<div className='card text-center'>
  <img src={grape}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Grapes</h5>
    <p class="card-text"> ₹. 100</p>
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>


<div className='card text-center'>
  <img src={dates}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Dates</h5>
    <p class="card-text"> ₹. 400</p>
    <i class='fa fa-star yellow-color' ></i>
      <i class='fa fa-star yellow-color' ></i>
      <i class='fa fa-star yellow-color'></i>
      <i class='fa fa-star yellow-color'></i>
      <i class='fa fa-star  yellow-color'></i>
      <br/>
      
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>

<div className='card text-center'>
  <img src={pomo}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Pomegranate</h5>
    <p class="card-text"> ₹. 200</p>
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>

<div className='card text-center'>
  <img src={lemom}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Lemon</h5>
    <p class="card-text"> ₹. 50</p>
    <a href="#" class="btn btn-success">Add to Cart</a>
  </div>
</div>

<div className='card text-center '>
  <img src={avacado}class="card-img-top-center"  alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Avacado</h5>
    <p class="card-text"> ₹. 600 -  ₹. 900 </p>
    <a href="#" class="btn btn-success">View Options</a>
  </div>
</div>

</div>

<div className="footer" class="foot">
  <h3>Copyright © Your Website 2023</h3>
</div>

       </div>

  );
}

export default Shopping;


