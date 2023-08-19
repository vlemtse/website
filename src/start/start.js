import c from './start.module.css'
import popup from '../popup.module.css'
import Header from "../components/header/header";


const Main = () => {
    return (
        <div className={c.mainStart}>

            <Header/>

            <div id='authFormBox' className={`${c.formBox} ${popup.popup}`}>
                <div className={c.buttonBox}>
                    <div id='btnFont' className={c.btn}></div>
                    <button id='loginBtn' className={c.toggleBtn} style={{color: "black"}} type='button'
                            onClick={loginBtnOnClick}>Login
                    </button>
                    <button id='registerBtn' className={c.toggleBtn} type='button'
                            onClick={registerBtnOnClick}>Register
                    </button>
                </div>

                {/*<div className={c.lineBox}>
                    <hr/>
                    <div className={c.lineText}>or</div>
                </div>*/}


                <form id='login' className={`${c.inputGroup} ${c.login}`}>
                    <input className={c.inputField} type='text' placeholder='User name' required/>
                    <input className={c.inputField} type='text' placeholder='Password' required/>
                    <input className={c.checkbox} type='checkbox'/><samp>Remember me</samp>
                    <button className={c.submitBtn} type='button'>Login now</button>
                </form>
                <form id='register' className={`${c.inputGroup} ${c.register}`}>
                    <input className={c.inputField} type='text' placeholder='User name' required/>
                    <input className={c.inputField} type='text' placeholder='Password' required/>
                    <input className={c.inputField} type='text' placeholder='Email' required/>
                    <button className={c.submitBtn} type='button' >Register now</button>
                </form>
            </div>


        </div>
    )
}

const loginBtnOnClick = () => {
    var login = document.getElementById('login')
    var register = document.getElementById('register')
    var btnFont = document.getElementById('btnFont')
    var loginBtn = document.getElementById('loginBtn')
    var registerBtn = document.getElementById('registerBtn')


    login.style.left = '50%'
    login.style.visibility = 'visible'
    register.style.left = '50vw'
    register.style.visibility = 'hidden'
    btnFont.style.left = '0'
    loginBtn.style.color = 'black'
    loginBtn.style.transitionDelay = '0.3s'
    registerBtn.style.color = '#919191'
    registerBtn.style.transitionDelay = '0.3s'
}

const registerBtnOnClick = () => {
    var login = document.getElementById('login')
    var register = document.getElementById('register')
    var btnFont = document.getElementById('btnFont')
    var loginBtn = document.getElementById('loginBtn')
    var registerBtn = document.getElementById('registerBtn')


    login.style.left = '-10vw'
    login.style.visibility = 'hidden'
    register.style.left = '50%'
    register.style.visibility = 'visible'
    btnFont.style.left = '110px'
    loginBtn.style.color = '#919191'
    loginBtn.style.transitionDelay = '0.3s'
    registerBtn.style.color = 'black'
    registerBtn.style.transitionDelay = '0.3s'
}


export default Main