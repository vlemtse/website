import c from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={c.main}>
            <div className={c.name}>
                <NavLink className={c.nameLink} activeClassName={c.activeLink} to='/main'>Morons inc.</NavLink>
            </div>
            <div className={c.auth}>
                <input className={c.authBottom} type='submit' value='SignIn'/>
            </div>
        </div>
    )
}

export default Header