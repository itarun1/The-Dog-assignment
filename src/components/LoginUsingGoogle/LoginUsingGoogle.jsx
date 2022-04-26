import {  useState } from 'react'
import { Link } from 'react-router-dom'
import "./LoginCss/LoginCss.css"
import { GoogleLogin } from "react-google-login"
import { useNavigate } from 'react-router-dom'

const LoginUsingGoogle = () => {
    const navigate = useNavigate()
    const [toggleButton, setToggleButton] = useState({email:"", password:""})
    const [googleData, SetGoogleData] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target
        const payload = {
            ...toggleButton, [name]: value
        }
        setToggleButton(payload)
    }
    function handleSubmit() {
        toggleButton.email === '' || toggleButton.password === '' ? console.log("empty") : console.log("continue")
    }

    const handleSuccess = (response) => {
      console.log(response)
      SetGoogleData(response)
      navigate("/")
        
    }
    const handleFailure = (reject) => {
        console.log(reject)
    }


    return (
        <div>
            <div className='parent'>
                <div className="parentChild">
                    <div className="logManully">
                        <h2>Welcome</h2>
                        <p className='mar'>Log in using your Monster credentials</p>
                        <input type="text" placeholder='E-mail/Mobile' className='btn_login' onChange={handleChange} name="email" />
                        <i class="fa-solid fa-envelope"></i>
                        <br />
                        <input type="text" placeholder='Password' className='btn_login' onChange={handleChange} name="password" />
                        <i class="fa-solid fa-lock"></i>
                        <h4 className='forget'>Forget Password</h4>
                        <button className='button_login' disabled={toggleButton.email === '' || toggleButton.password === ''} onClick={handleSubmit}  >Login</button>
                    </div>
                    <div className='hr'>
                       
                        <hr /> OR <hr />
                    </div>
                    <div className="logSocial">
                        <p>With your social network</p>
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                            cookiePolicy="single_host_origin"
                            clientId="108347389537-q5rgp6cu6sv8vudt4n5blmtgvqujrevv.apps.googleusercontent.com"      
                            render={(ren) => {
                                return (
                                    <button onClick={ren.onClick} disabled={ren.disabled} className='button_login2'  >Login With Google</button>
                                )
                            }}
                        ></GoogleLogin>
                    </div>
                    <br />
                    <div className="RegisterLog">
                        <p>New to Monster?</p>
                        <p className='p2'>Create your profile now and be visible to the top recruiters in the world</p>
                        <Link to={"/register"}><button  className='button_login3' >Register with Us</button></Link>
                        <br />
                        <br />
                    </div>
                    <br />
                    <div className="downloadApp">
                        <p className='p2'>Your dream job is a click away! Get the app on <br /> your mobile.</p>
                        <button  className='button_login4' >Google Paly</button>
                        
                        <button  className='button_login5' >Apple Store </button>
                        <br />
                        <br />
                    </div>
                    <i class="fa-brands fa-google-play"></i>
                    <i class="fa-brands fa-apple"></i>
                </div>
            </div>
        </div>
    )
}
export default LoginUsingGoogle
