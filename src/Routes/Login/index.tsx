import React, { SyntheticEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import colors from '../../Utils/colors'
import { Copyright, VpnKey, Person, Lock, Email, EmojiObjects } from '@mui/icons-material'
import { useHistory } from 'react-router'

interface State {
    checked: boolean,
    username: String,
    password: String
}

const Login: React.FC = () => {

    const history = useHistory()
    const [remember, setRemember] = useState<State['checked']>(false)
    const [username, setUsername] = useState<State['username']>("")
    const [password, setPassword] = useState<State["password"]>("")
    const [form, setForm] = useState<State["checked"]>(false)

    const handleLogin = (event: SyntheticEvent) => {
        event.preventDefault()
        history.replace("/dashboard")
    }

    const forgot = (e: SyntheticEvent) => {
        setTimeout(() => {
            setForm(prev => !prev)
        },100)
        e.preventDefault()
        document.querySelector(".login__form")?.classList.toggle("animate__forgot")
    }

    return (
        <div className = "bg-gray-800 h-screen items-center justify-center flex">
            {
                !form && <form className = "w-4/5 md:w-3/5 login__form">
                <div className="flex items-center justify-center mb-4 md:mb-6">
                    <FontAwesomeIcon icon = {faFlask} color = {colors.SKY_BLUE} className = "text-2xl md:text-4xl mr-2 md:mr-4" />
                    <div><p className = "text-green-300 font-display text-2xl md:text-4xl">Dey's Medical</p></div>
                </div>
                <div className="flex items-center justify-center mb-4 md:mb-8">
                    <Copyright sx = {{ color: colors.ACCENT_GREEN }} className = "md:mr-4 mr-2" />
                    <div><p className = "text-green-300 font-display text-md md:text-2xl">Dey's Medical (U.P.) Pvt. Ltd.</p></div>
                </div>
                <div className = "flex justify-center">
                    <div className = "bg-white-200 w-full md:w-1/2 flex items-center pt-4 justify-center flex-col border-solid border-blue-400 border-8">
                        <div className = "flex items-center w-11/12 border-solid border-gray-400 border border-t-0 border-l-0 border-r-0 pb-2">
                            <div className = "transform rotate-45"><VpnKey /></div>
                            <div><p>Enter your login details to begin:</p></div>
                        </div>
                        <div className = 'w-11/12 mt-6 relative'>
                            <input
                                type="text"
                                className = "bg-white-100 w-full h-10 focus:outline-none px-4 text-sm font-display text-gray-300 border border-solid border-gray-400"
                                placeholder = "Username"
                                onChange = {e => setUsername(e.target.value)}
                            />
                            <Person className = "absolute bottom-2 right-2 text-gray-400" />
                        </div>
                        <div className = 'w-11/12 mt-6 relative'>
                            <input
                                type="password"
                                className = "bg-white-100 w-full h-10 focus:outline-none px-4 text-sm font-display text-gray-300 border border-solid border-gray-400"
                                placeholder = "Password"
                                onChange = {e => setPassword(e.target.value)}
                            />
                            <Lock className = "absolute bottom-2 right-2 text-gray-400" />
                        </div>
                        <div className = "w-11/12 mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className = "flex items-center w-full md:w-1/2">
                                <input type="checkbox" onChange = {e => setRemember(e.target.checked)} checked = {remember} />
                                <p className = "ml-2 font-display">Remember Me</p>
                            </div>
                            <div className = "w-full md:w-1/2 items-center justify-end flex mt-4 md:mt-0 mb-6">
                                <button
                                    className = "flex items-center bg-blue-300 w-full md:w-3/4 items-center justify-center h-12 focus:outline-none text-white-100 rounded"
                                    type = "submit"
                                    onClick = {handleLogin}
                                >
                                    <div className = "transform rotate-45"><VpnKey /></div>
                                    <p className = "ml-px font-display">Login</p>
                                </button>
                            </div>
                        </div>
                        <div className = "w-full mt-4 md:mt-8">
                            <button onClick = {forgot} className = "bg-blue-300 w-full flex items-center justify-center h-10 text-yellow-100 text-base"><p className = "font-display">Forgot Password</p></button>
                        </div>
                    </div>
                </div>
            </form>}

            {
                form && <form className = "w-4/5 md:w-3/5 login__form">
                <div className="flex items-center justify-center mb-4 md:mb-6">
                    <FontAwesomeIcon icon = {faFlask} color = {colors.SKY_BLUE} className = "text-2xl md:text-4xl mr-2 md:mr-4" />
                    <div><p className = "text-green-300 font-display text-2xl md:text-4xl">Dey's Medical</p></div>
                </div>
                <div className="flex items-center justify-center mb-4 md:mb-8">
                    <Copyright sx = {{ color: colors.ACCENT_GREEN }} className = "md:mr-4 mr-2" />
                    <div><p className = "text-green-300 font-display text-md md:text-2xl">Dey's Medical (U.P.) Pvt. Ltd.</p></div>
                </div>
                <div className = "flex justify-center">
                    <div className = "bg-white-200 w-full md:w-1/2 flex items-center pt-4 justify-center flex-col border-solid border-blue-400 border-8">
                        <div className = "flex items-center w-11/12 border-solid border-gray-400 border border-t-0 border-l-0 border-r-0 pb-2">
                            <div className = "transform rotate-45"><VpnKey /></div>
                            <div><p>Retrieve password</p></div>
                        </div>
                        <div className = 'w-11/12 mt-6 relative'>
                            <p className = "mb-4">Enter your email to receive reset instructions:</p>
                            <input
                                type="text"
                                className = "bg-white-100 w-full h-10 focus:outline-none px-4 text-sm font-display text-gray-300 border border-solid border-gray-400"
                                placeholder = "Email"
                                onChange = {e => setUsername(e.target.value)}
                            />
                            <Email className = "absolute bottom-2 right-2 text-gray-400" />
                        </div>
                        <div className = "w-11/12 mt-4 mb-8 flex items-center justify-end">
                            <button className = "flex items-center justify-center bg-blue-300 w-1/2 md:w-1/3 h-12 rounded text-white-100" onClick = {e => e.preventDefault()}>
                                <EmojiObjects className = "mr-px" />
                                <p>Send me</p>
                            </button>
                        </div>
                        <div className = "w-full mt-4 md:mt-8">
                            <button onClick = {forgot} className = "bg-blue-300 w-full flex items-center justify-center h-10 text-yellow-100 text-base"><p className = "font-display">Back to login</p></button>
                        </div>
                    </div>
                </div>
            </form>}
        </div>
    )
}

export default Login