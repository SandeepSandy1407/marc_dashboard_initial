import React from 'react'
import "./index.css"

function SignUp() {
  return (
    <div className='sign-up-main-background'>
        <div className='sign-up-inner-container'>
        <div className='image-container-sign-up'>
            <img className='sign-up-image-style' src= "https://img.freepik.com/free-vector/gradient-npl-illustration_52683-80462.jpg?w=740&t=st=1706589478~exp=1706590078~hmac=474d9d4e716a7b28b852b06ce286da03a7ef48776f82812682df7b3d2eafc350" alt="sign-up" />
        </div>
        <div className='sign-up-empty-container'>
            <p></p>
        </div>
        <form className='sign-up-form-container'>
                <div className='sign-up-inp-field-container'>
                <label htmlFor = "userName" className='sign-up-font-style'>Name</label>
                <input type= "text" id = "userName" className='sign-up-input-field'/>
                </div>
                <div className='sign-up-inp-field-container'>
                <label htmlFor = "userId"  className='sign-up-font-style'>User Id</label>
                <input type= "text" id = "userId"  className='sign-up-input-field'/>
                </div>
                <div className='sign-up-inp-field-container'>
                <label htmlFor = "userEmail"  className='sign-up-font-style'>Email id</label>
                <input type= "text" id = "userEmail" className='sign-up-input-field'/>
                </div>
                <div className='sign-up-inp-field-container'>
                <label htmlFor='userPassword'  className='sign-up-font-style'>Password</label>
                <input type= "password"  htmlFor = "userPassword" className='sign-up-input-field'/>
                </div>
                <button type='submit' className='sign-up-submit-button'>Register</button>
            </form>
        

        </div>
        <footer>
            <p>Powered By MaxByte</p>
        </footer>
    </div>
  )
}

export default SignUp