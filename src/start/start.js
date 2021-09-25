import c from './start.module.css'
import Header from "../components/header/header";


const Main = () => {
    return (
        <div className={c.mainStart}>

            <Header/>

            <div className={c.formBox}>
                <div className={c.buttonBox}>
                    <div id='btn' className={c.btn}></div>
                    <button className={c.toggleBtn} type='button' onClick={() => {
                        var login=document.getElementById('login')
                        var register=document.getElementById('register')
                        var btn=document.getElementById('btn')


                        login.style.left = '90px'
                        register.style.left = '550px'
                        btn.style.left = '0'

                    }}>Вход
                    </button>
                    <button className={c.toggleBtn} type='button' onClick={() => {
                        var x=document.getElementById('login')
                        var y=document.getElementById('register')
                        var z=document.getElementById('btn')


                        x.style.left = '-350px'
                        y.style.left = '90px'
                        z.style.left = '110px'
                    }}>Регистрация</button>
                </div>

                <form id='login' className={`${c.inputGroup} ${c.login}`}>
                    <input className={c.inputField} type='text' placeholder='User name' required/>
                    <input className={c.inputField} type='text' placeholder='Password' required/>
                    <input className={c.checkbox} type='checkbox'/><samp>Запомнить пароль</samp>
                    <button className={c.submitBtn} type='button'>Login now</button>
                </form>
                <form id='register' className={`${c.inputGroup} ${c.register}`}>
                    <input className={c.inputField} type='text' placeholder='User name' required/>
                    <input className={c.inputField} type='text' placeholder='Password' required/>
                    <input className={c.inputField} type='text' placeholder='Email' required/>
                    <button className={c.submitBtn} type='button'>Register now</button>
                </form>
            </div>



        </div>
    )
}

export default Main