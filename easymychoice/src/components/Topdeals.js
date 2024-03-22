import React, {useState} from "react";
import logo1 from "./images/logo1.png"
import logo2 from "./images/logo2.jpg"
import logo3 from "./images/logo3.png"
import logo4 from "./images/logo4.png"
import logo5 from './images/logo5.png'
import logo6 from './images/logo6.png'
import logo7 from './images/logo7.png'
import logo8 from './images/logo8.png'
import logo9 from './images/logo9.png'
import logo10 from './images/logo10.png'

function Topdeals() {
    const [time, setTime] = useState();
    setInterval(()=>{
        const date= new Date();
        setTime(date.toLocaleTimeString())
    },1000)

  return (
    <>
      <div className="mx-4 my-3" style={{ transform: "translateY(70px)" }}>
        <div
          className="top-text"
          style={{ display: "flex", justifyContent: "space-between", fontFamily:"Dosis" }}
        >
          <h3>Top CashBack Store</h3>
          <u style={{color:"blue"}}>
            <h6>
            <button style={{border:"none", backgroundColor:"lightgray"}}> <u>View All</u> <i className="fa-solid fa-arrow-right"></i>{" "}</button>
            </h6>
          </u>
        </div>
        <div
          className="stores mx-3"
          style={{width: "99.7%",display:"grid",gridTemplateColumns:"repeat(5,1fr)", gap:"10px",overflow:"scroll"}}
        >
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo1} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn Upto 3% rewards</button> <br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>Reward Rate & Terms</u></p>
              </div>
            </div>
            <div className="store_card_offer">
                <span>Upto 80% OFF</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo2} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn 5% CashBack Now</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>Cashback Rate & Terms</u></p>
              </div>
            </div>
            <div className="store_card_offer">
                <span>Upto 70% OFF</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo3} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn ₹2500 Rewards Now</button><br />
              </div>
            </div>
            <div className="store_card_offer">
                <span>PLATINUM REWARDS-LTF</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo4} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 6% cashback</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>Cashback Rate & Terms</u></p>
              </div>
            </div>
            <div className="store_card_offer">
                <span>Upto 80% OFF</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo5} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 6% cashback</button><br />
                <button className="digital-clock btn btn-danger" style={{transform:"translateY(15px)"}}>{time}</button>
              </div>
            </div>
            <div className="store_card_offer">
                <span>LIFETIME FREE</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo6} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 6% cashback</button><br />
                <p style={{transform:"translateY(15px)"}}> <u style={{color:"blue"}}>EARN 4% CASHBACK NOW</u> </p>
              </div>
            </div>
            <div className="store_card_offer">
                <span>SALE IS LIVE NOW</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo7} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 18% cashback</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>CashBack Rate & Terms</u></p>              </div>
            </div>
            {/* <div className="store_card_offer">
                <span>LIFETIME FREE</span>
            </div> */}
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo8} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 7% Rewards</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>CashBack Rate & Terms</u></p>              </div>
            </div>
            {/* <div className="store_card_offer">
                <span>LIFETIME FREE</span>
            </div> */}
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo9} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 5% cashback</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>CashBack Rate & Terms</u></p>              </div>
            </div>
            <div className="store_card_offer">
                <span>UPTO 40% OFF</span>
            </div>
          </div>
          <div className="card" style={{width:"18rem", padding:"20px"}}>
            <div style={{display:"grid", placeItems:"center", transform:"translateY(20px)"}}>
                <img src={logo10} className="card-img-top" alt="..." style={{width:"100px", height:"50px"}}/>
            </div>
            <div className="card-body"style={{transform:"translateY(20px) translateX(20px)" }}>
              <div className="card-text text-center">
                <button className="btn btn-success">Earn upto 15% cashback</button><br />
                <p style={{transform:"translateY(15px)"}}><u style={{color:"blue"}}>CashBack Rate & Terms</u></p>              </div>
            </div>
            <div className="store_card_offer">
                <span>B2G4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topdeals;
