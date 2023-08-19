import c from './header.module.css'
import popup from '../../popup.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={c.main}>
            <div className={c.name}>
                <NavLink className={c.nameLink} activeClassName={c.activeLink} to='/main'>Morons inc.</NavLink>
            </div>
            <div id='signInBoxBtn' className={c.auth}>
                <div id='authBtnFont' className={c.btn}></div>
                <button className={c.signInBtn} type='button' onClick={showAuthFormBox}>SignIn</button>
            </div>
        </div>
    )
}

const showAuthFormBox = () => {
    var authFormBox=document.getElementById('authFormBox')
    var signInBoxBtn=document.getElementById('signInBoxBtn')

    // authFormBox.style.visibility = 'visible'
    signInBoxBtn.style.display = 'none'
    authFormBox.style.transform = 'translateY(0)'
    authFormBox.style.transition = '2s'
}

export default Header