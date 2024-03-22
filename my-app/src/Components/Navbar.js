import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav class={`navbar navbar-expand-lg navbar-default navbar-fixed-top bg-${props.mode}`}>
  <div class="container-fluid">
    <Link class={`navbar-brand text-${props.mode==='dark' ? 'light' : 'dark'}`} to="/">TextUtils</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class={`nav-link active text-${props.mode==='dark' ? 'light' : 'dark'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link text-${props.mode==='dark' ? 'light' : 'dark'}`} to="/about">About</Link>
        </li>
      </ul>
      <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px blue'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px yellow'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px red'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px green'}}></div>
          <div className="bg-dark rounded mx-2" onClick={()=>props.toggleMode('dark')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px white'}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>props.toggleMode('light')} style={{height:'30px', width:'30px', cursor:'pointer', boxShadow:'0px 0px 10px black'}}></div>
        </div>
    </div>
  </div>
</nav>

    </>
  )
}

Navbar.propTypes ={
  title:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"The name is Akshay",
  name:"Welcome"
}





