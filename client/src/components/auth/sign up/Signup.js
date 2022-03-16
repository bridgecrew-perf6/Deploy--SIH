import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { showErrMsg, showSuccessMsg } from "../../utils/notification/Notification";
import { isEmpty, isEmail, isLength_Adh, isLength_Pas, isLength_Phn, isMatch } from "../../utils/validation/Validation";


const initialstate = {
    name:'',
    email:'',
	phone:'',
	adhar:'',
    password:'',
    cf_password: '',
    err: '',
    success: ''
}

const Signup = () => {
	const [user, setUser] = useState(initialstate)

	const {name, email, phone, adhar, password, cf_password, err, success} = user

	const handleChangeInput = e => {
        const {name, value} = e.target 
        setUser({...user, [name]:value, err:'', success:''})

		
    	

    }

	const handleSubmit = async e => {
		e.preventDefault()
		if(isEmpty(name) ||  isEmpty(email) || isEmpty(password) || isEmpty(cf_password) || isEmpty(phone) || isEmpty(adhar))
		return setUser({...user, err: "Please fill all the fields.", success:''})
 
		if(!isEmail(email))
		return setUser({...user, err: "Invalid email.", success:''})

		if(isLength_Phn(phone))
		return setUser({...user, err: "Invalid phone number ", success:''})

		if(isLength_Adh(adhar))
		return setUser({...user, err: "Invalid Adhar number ", success:''})
 
		if(isLength_Pas(password))
		return setUser({...user, err: "Password must be  at least 6 characters. ", success:''})
 
		if(!isMatch(password, cf_password))
		return setUser({...user, err: "Password did not match", success:''})
 
		 try {
			 const res = await axios.post('/user/register', {
				 name, email,phone, adhar, password
			 })
 
			 setUser({...user, err: '', success:res.data.msg})
 
		 } catch (err) {
			 err.response.data.msg && 
			 setUser({...user, err: err.response.data.msg, success:''})
		 }
	 }

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>

					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						{err && showErrMsg(err)}
            		    {success && showSuccessMsg(success)}
						<input
							type="text"
							placeholder=" Name"
							name="name"
							id="name"
							onChange={handleChangeInput}
							value={name}
							required
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							id="email"
							onChange={handleChangeInput}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Phone Number"
							name="phone"
							id = "phone"
							onChange={handleChangeInput}
							value={phone}
							
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Adhar Number"
							name="adhar"
							id="adhar"
							onChange={handleChangeInput}
							value={adhar}
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
						<input
							type="password"
							placeholder="Confirm Password"
							name="cf_password"
							id="cf_password"
							onChange={handleChangeInput}
							value={cf_password}
							required
							className={styles.input}
						/>
						
						
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;