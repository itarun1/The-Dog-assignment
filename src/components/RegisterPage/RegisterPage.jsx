import React from 'react'
import "./RegisterCss/RegisterCss.css"
import { GoogleLogin } from "react-google-login"
const RegisterPage = () => {
 
    const handleSuccess = (response) => {
        console.log(response)
    //   console.log("login succes")

    }
    const handleFailure = (reject) => {
        console.log(reject)
    }
    return (
        <div>
            <div className="parentRegister">
                <div className="parentRegisterChild">
                    <div className="headReg">
                        <h2 className='headTag'>Create an Account</h2>  <p className='headTag'>(It's free)</p>
                        <p>It only takes a couple of minutes to get started</p>
                    </div>
                    <div className="RegisterWithGoogle">
                        {/* <i class="fa-brands fa-google-plus-g"></i> */}
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                            cookiePolicy="single_host_origin"
                            clientId="108347389537-q5rgp6cu6sv8vudt4n5blmtgvqujrevv.apps.googleusercontent.com"      
                            render={(ren) => {
                                return (
                                    <button className='button_register' onClick={ren.onClick} disabled={ren.disabled}  >Sign Up with Google</button>
                                )
                            }}
                        ></GoogleLogin>
                    </div>
                    <div className="inputRegister">
                        <div className="inputREgChild">
                            <p className='inputRegP margin' >Full Name *</p>
                            <input type="text" placeholder='Enter Your Name' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Email ID *</p>
                            <input type="text" placeholder='Enter Your Email ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Password *</p>
                            <input type="text" placeholder='Enter Your Password ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Mobile Number *</p>
                            <input type="text" placeholder='Enter Your  Mobile Number ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Current Location *</p>
                            <input type="text" placeholder='Enter Your  Current Location ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Total Experience *</p>
                            <input type="text" placeholder='Enter Your Total Experience ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Key Skills *</p>
                            <input type="text" placeholder='Enter Your Key Skills ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Preferred Industry *</p>
                            <input type="text" placeholder='Enter Your Preferred Industry ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputRegP margin'>Preferred Department/Function *</p>
                            <input type="text" placeholder='Enter Your Preferred Department/Function ' />
                        </div>
                        <div className="inputREgChild">
                            <p className='inputBot'>By registering, you agree to our Terms and Conditions, Privacy Policy and default <br />  mailer and communications settings governing the use of monsterindia.com.</p>
                            <button className='button_register2' >Register Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage
