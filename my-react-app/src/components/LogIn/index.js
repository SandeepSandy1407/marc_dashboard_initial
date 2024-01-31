import React, {useState,useEffect} from 'react'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Carousel from './carousel';
import "./index.css";
function LogIn
() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showErr,setShowErr] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [data, setData] = useState({})
    const navigate = useNavigate();

    
    
    const  onSubmitSuccess = (jwtTkoken) => {
    
        Cookies.set("jwt_token", jwtTkoken, {
          expires: 30,
          path: "/",
        });
        navigate("/");
      };
    
    const  onSubmitFailure = (errorMsg) => {
        console.log(errorMsg);
        setErrMsg(errorMsg)
        setShowErr(true)
      };
    
    const  submitForm = async (event) => {
        event.preventDefault();
        const userDetails ={ userName, password };
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
          };
        const url = "https://apis.ccbp.in/login";
        fetch(url, {
            options,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => response.json())
   .then((data) => {
      console.log(data);
      setData(data)
      // Handle data
   })
   .catch((err) => {
      console.log(err.message);
   });
        
        
        if (data.ok === true) {
          onSubmitSuccess(data.jwt_token);
        } else {
          onSubmitFailure(data.error_msg);
        }
      };

    const renderPasswordField = () => (
          <>
            <label className="input-label-login" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="username-input-filed-login"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </>
        );

    const renderUsernameField = () => (
            <>
            <label className="input-label-login" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-filed-login"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </>
            );
        useEffect(()=>{
                const jwtToken = Cookies.get("jwt_token");
                if (jwtToken === undefined) {
                    navigate("/")
                    }
        },[navigate])


  return (
    <div className="login-form-container">
        <div className='image-container-login'>
        <img
          src="https://res.cloudinary.com/dg9wsic7j/image/upload/v1706086552/company_logo_apzori.png"
          className="login-image"
          alt="website login"
        />
        <img
            src="https://res.cloudinary.com/dg9wsic7j/image/upload/v1706086413/web_login_ebfy11.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
        </div>
        <form className="form-container-login" onSubmit={submitForm}>
          
          <div className="input-container-login">{renderUsernameField()}</div>
          <div className="input-container-login">{renderPasswordField()}</div>
          <button type="submit" className='button button2'>
            Login
          </button>
          {showErr && <p className="error-message">*{errMsg}</p>}
          <div className='container-for-register'>
          <p className='register-para1' >Don't have an Account?</p>
          <p className='register-para2' >Register Here</p>
          <button onClick={() =>navigate("/signup")} className='button button1'>Sign Up</button>
          </div>
        </form>
        <Carousel/>
      </div>
  )
}

export default LogIn
