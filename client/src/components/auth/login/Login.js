import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { showErrMsg,showSuccessMsg } from "../../utils/notification/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from 'react-redux'
import styles from "./styles.module.css";



const initialstate = {
    email:'',
    password: '',
    err: '',
    success: ''
}

export default function Login() {
	const [user, setUser] = useState(initialstate)

	const dispatch = useDispatch()
    const Navigate = useNavigate()

	const {email, password, err, success} = user

	const handleChangeInput = e => {
        const {name, value} = e.target 
        setUser({...user, [name]:value, err:'', success:''})

		
    	

    }

	const handleSubmit = async e => {
		e.preventDefault()
		 try {
			const res = await axios.post('/user/login', {email, password})

			 setUser({...user, err: '', success: res.data.msg})
 
			 localStorage.setItem('firstLogin', true)

			 dispatch(dispatchLogin())
             Navigate('/')
			 
 
		 } catch (err) {
			 err.response.data.msg  && 
			 setUser({...user, err: err.response.data.msg, success:''})
		 }
	 }

   return (
	   
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						{err && showErrMsg(err)}
            			{success && showSuccessMsg(success)}
						<input
							type="text"
							placeholder="Email"
							name="email"
							id="email"
							onChange={handleChangeInput}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							id="password"
							onChange={handleChangeInput}
							value={password}
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
						<Link to="/forgot_password">Forgot your password?</Link>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

