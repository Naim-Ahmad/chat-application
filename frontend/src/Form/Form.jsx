import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Form() {
  const [active, setActive] = useState('Login')
  const handleTab = (event) => {
    setActive(event.target.innerText)
  }
  return (
    <div className="flex justify-center h-[80vh] mt-20">
        <div className="">
            <div className="tabs tabs-boxed mb-6" onClick={handleTab}>
              <a className={`tab ${active === 'Login' ? 'tab-active' : ''} flex-1`}>Login</a> 
              <a className={`tab ${active === 'SignUp' ? 'tab-active' : ''} flex-1`}>SignUp</a> 
            </div>
          <div className="">
            {
              active === 'Login' ? <Login /> : <SignUp/>
            }
          </div>
       </div>
    </div>
  )
}
