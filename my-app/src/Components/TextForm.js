import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [counts, newCount] = useState(0);
    const handleupEvent = ()=>{
        // console.log("Convertd to UpperCase");
        let newText=text.toUpperCase();
        setText(newText)
        // console.log(newText)
        props.showAlert("Converted to Upper case", "success");
    }
    const handleloEvent = ()=>{
        // console.log("Convertd to UpperCase");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case", "success");
        // console.log(newText)
    }

    const Allclear = ()=>{
        setText("");
        props.showAlert("Text cleared", "success");
    }
    
    const letter=document.querySelector('.letter');
    const count = ()=>{
        let countt=0;
        for(let i=0;i<text.length;i++){
            if(text[i].toLowerCase()===letter.value.toLowerCase()){
                countt=countt +1;
                console.log(i+1);
            }
        }
        newCount(countt);
        props.showAlert("Count successfull", "success");
    }

    const alternateLower = ()=>{
        let newtxt='';
        for(let i=0;i<text.length;i++){
            if((i%2)===0){
                newtxt=newtxt + text[i].toLowerCase();
            }
            else{
                newtxt=newtxt + text[i];
            }
        }
        setText(newtxt);
        props.showAlert("Converted to Alternate Lower Case", "success");
    }

    const extraSpace = ()=>{
        let newtxtt=text.split(/[ ]+/g);                 // Regex : For finding more than one space.
        setText(newtxtt.join(" "));
        props.showAlert("Extra Space Removed", "success");
    }

    const box=document.querySelector("#FormControlTextarea1");
    const copy = ()=>{
        box.select();
        box.setSelectionRange(0,9999999)
        navigator.clipboard.writeText(box.value);
        props.showAlert("Text Copied", "success");
    }

    const x=document.querySelector(".input");
    const y=document.querySelector(".input2");
    const searchAndSelect = ()=>{
        const regex = new RegExp(`${x.value}`, "g");
        const nwtxt= text.replace(regex, y.value);
        setText(nwtxt);
        props.showAlert("Text Replaced", "success");
    }


    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
    <div className={`container my-4 bg-${props.mode}`} style={{boxShadow:'0px 0px 10px black'}}>
        <div className ="mx-2">
           <h2 className={`text-${props.mode==='dark' ? 'light':'dark'}`}>{props.heading}</h2>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light' ? 'dark':'light'}`} value={text} onChange={handleOnChange} id="FormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary my-1" onClick={handleupEvent}>Convert to uppercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleloEvent}>Convert to lowercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={Allclear}>All Clear</button>
            <button className="btn btn-primary my-1 mx-1" onClick={extraSpace}>Remove Extra</button>
            <button className="btn btn-primary my-1 mx-1" onClick={count}>Count the letters</button>
            <button className="btn btn-primary my-1 mx-1" onClick={alternateLower}>aLtErNaTe</button>
            <button className="btn btn-primary my-1 mx-1" onClick={copy}>Copy text</button>
        </div>
    </div>
    <div className={`container my-3 bg-${props.mode}`} style={{boxShadow:'0px 0px 10px black'}}>
    <h2 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Text Summary :</h2>
    <p className={`words text-${props.mode==='light' ? 'dark':'light'}`}>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
    <h2 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Preview :</h2>
    <p className={`texts text-${props.mode==='light' ? 'dark':'light'}`}>{text}</p>
    <h2 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Number of <input className='letter' type="text" /> in the text : </h2>
    <p className={`A text-${props.mode==='light' ? 'dark':'light'}`}>{counts}</p>
    <h2 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Search : <input className='input' type="text" /></h2>
    <h2 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Replace with : <input className='input2' type="text" /></h2>
    <button className={`btn btn-primary my-4 mx-1 text-${props.mode==='light' ? 'dark':'light'}`} onClick={searchAndSelect}>Replace</button>
    </div>
    </>
  )
}
