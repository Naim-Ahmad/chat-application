import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Form() {
  const [active, setActive] = useState('Login')
  const handleTab = (event) => {
    setActive(event.target.innerText)
  }
  return (
    <div>
        <div className="tabs tabs-boxed" onClick={handleTab}>
          <a className={`tab ${active === 'Login' ? 'tab-active' : ''}`}>Login</a> 
          <a className={`tab ${active === 'SignUp' ? 'tab-active' : ''}`}>SignUp</a> 
      </div>
      <div>
        {
          active === 'Login' ? <Login/> : <SignUp/>
        }
      </div>
    </div>
  )
}
