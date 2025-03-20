import React, { useCallback, useState, useEffect,useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Passwordgenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
    const passwordRef = useRef(null);
  const Passwordgeneratorprog = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_{}[]~`";
    for (let i = 1; i < length + 1; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);
  useEffect(() => {
    Passwordgeneratorprog();
  }, [length, charAllowed, numberAllowed, Passwordgeneratorprog]);
  const handleCopy = useCallback(()=>{
    window.navigator.clipboard.writeText(password).then(()=>{
        
        toast.success(`copied to clipboard!`);
    }).catch((err)=>{

      toast.success(`failed to copy to clipboard!`);
    })
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700 text-center">
        <h1 className="text-center text-2xl p-5">Passwordgenerator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0" onClick={handleCopy}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberallowed"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberallowed">Numbers </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charallowed"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charallowed">Charcters</label>
          </div>
        </div>
      </div>
      <ToastContainer 
      position="top-right"
      theme='dark'
      
      />
    </>
  );
}

export default Passwordgenerator;
