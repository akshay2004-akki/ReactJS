import "./App.css";
import { useCallback, useState, useRef, useEffect } from "react";

function App() {
  const [pass, setPass] = useState("qUrtay")
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [charc, setCharc] = useState(false)

  const generatePass = useCallback(()=>{
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const digits = "0123456789"
    const special = "!@#$%^&*"
    let passWord = "";
    if(num) alpha+=digits;
    if(charc) alpha+=special;

    for(let i=0;i<len;i++){
      let char = Math.floor(Math.random() * alpha.length + 1);
      passWord +=alpha.charAt(char); 
    }
    setPass(passWord);

  },[num,charc, setPass, len])
  useEffect(()=>{
    generatePass();
  },[len, num,charc, setPass, generatePass])

  let cpyTxt = useRef()
  const copy = ()=>{
    cpyTxt.current?.select();
    window.navigator.clipboard.writeText(cpyTxt.current.value);
  }
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-8/12 h-40 bg-blue-900 rounded-xl flex flex-col">
          <h1 className="text-xl text-center py-2 text-white">PassWord Generator</h1>
          <div className="flex w-full flex items-center justify-center py-4">
            <span className="w-6/12 p-1 py-1 rounded"><input className="pasa area w-full bg-white p-1 py-1 rounded" value={pass} ref={cpyTxt} readOnly/></span>
            <span><button className="copy bg-blue-300 p-1 py-1 rounded" onClick={copy}>Copy</button></span>
          </div>
          <div className="flex justify-around">
            <span><input type="range" onChange={(e)=>setLen(e.target.value)} min={6} max={20}/><span className="text-white">Length : {len}</span></span>
            <span><input type="checkbox" onChange={()=>setNum((e)=>!e)}/><span className="text-white">Numbers</span></span>
            <span><input type="checkbox" onChange={()=>setCharc((e)=>!e)}/><span className="text-white">Special Character</span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
