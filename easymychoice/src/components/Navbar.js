import React from "react";
import { useState } from "react";
// import Link from 'react-router-dom';

function Navbar() {
    const [wid,setWid]=useState(-100)

    const openSideBar=()=>{
        if(wid===(-100)){
            setWid(0)
        }
        else{
            setWid(-100)
        }
    }
    const closeSideBar=()=>{
        if(wid===0){
            setWid(-100)
        }
        else{
            setWid(0)
        }
    }
  return (
    <React.Fragment>
        <div className="sidebar" style={{position:"fixed", backgroundColor:"darkblue", height:"100vh", width:"40%", zIndex:"9999",transform:`translateX(${wid}%)`,transitionDuration:"0.5s"}}>
            <div className="container my-2 mx-1" style={{color:"#fff"}}>
                <div className="contents" style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{fontSize:"28px", fontWeight:"500"}}>Category</p>
                    <p className="mx-4 close" style={{fontSize:"25px",}} onClick={closeSideBar}><i className="fa-solid fa-xmark"></i></p>
                </div> <br />
                {[
                    "MOST POPULAR RETAILERS",
                    "RETAILERS BY CATEGORY",
                    "TOP PRODUCT DEALS"
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px",}}>
                        {item}
                        <br />
                    </div>
                })}
                <hr style={{height:"2px", backgroundColor:"#fff"}}/>
                {[
                    "Mobiles",
                    "Headphones",
                    "Laptops"
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px"}}>
                        {item.toUpperCase()}
                        <br />
                    </div>
                })}
                <hr style={{height:"2px", backgroundColor:"#fff"}}/>
                {[
                    "Men fashion",
                    "women fashion",
                    "men shoes",
                    "women shoes"
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px"}}>
                        {item.toUpperCase()}
                        <br />
                    </div>
                })}
                <hr style={{height:"2px", backgroundColor:"#fff"}}/>
                {[
                    "Beauty",
                    "Grocery",
                    "Diapers",
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px"}}>
                        {item.toUpperCase()}
                        <br />
                    </div>
                })}
                <hr style={{height:"2px", backgroundColor:"#fff"}}/>
                {[
                    "see all categories"
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px"}}>
                        {item.toUpperCase()}
                        <br />
                    </div>
                })}
                <hr style={{height:"2px", backgroundColor:"#fff"}}/>
                {[
                    "All stores",
                    "all brands",
                    "all category",
                ].map((item, index)=>{
                    return <div className="items" key={index} style={{fontSize:"14px", padding:"2px", borderRadius:"5px"}}>
                        {item.toUpperCase()}
                        <br />
                    </div>
                })}
            </div>
        </div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="bars mx-3" style={{ fontSize: "23px" }}>
          <i className="fa-solid fa-bars" onClick={openSideBar}></i>
        </div>
        <div className="container-fluid" style={{fontFamily:"Poppins"}}>
          <a className="navbar-brand" href="/">
            EaseMyChoice
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div className="d-flex align-items-center">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="d-flex align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Help |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa-solid fa-user"></i> Login /
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
