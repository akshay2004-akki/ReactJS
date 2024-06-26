// import React, {useState} from 'react'
import React from 'react'
export default function About(props) {
    // const [myStyle, setStyle] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const toggle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div>
        <div className={`container bg-${props.mode} my-5 text-${props.mode==='light' ? 'dark' : 'light'}`}>
        <div className={`accordion bg-${props.mode}`} id="accordionExample">
            <div className={`accordion-item bg-${props.mode}`}>
                <h2 className={`accordion-header bg-${props.mode}`}>
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className={`accordion-item bg-${props.mode}`}>
                <h2 className={`accordion-header bg-${props.mode}`}>
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className={`accordion-item bg-${props.mode}`}>
                <h2 className={`accordion-header bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
