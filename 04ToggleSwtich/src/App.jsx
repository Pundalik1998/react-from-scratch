import { useState } from 'react'
// import { IoIosSwitch } from "react-icons/io";
// import { PiUserSwitchFill } from "react-icons/pi";
import './App.css'

function App() {
 const [isOn, setIsOn] = useState(false);


 const handleToggelSwitch= ()=>{
  setIsOn(!isOn);
 }
 
 const checkIsOn = isOn ? "on" : "off";
 const toggleBGColor  = {backgroundColor: isOn ? "#4caf50": "" }
  return (
    <>
    <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        {/* <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill /> */}
      </h1>

      <div  className="toggle-switch" 
      onClick={handleToggelSwitch}
      style= {toggleBGColor}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state" >
                {isOn ? "on": "off"}   
          </span>
        </div>
      </div>
    </>
  )
}

export default App
