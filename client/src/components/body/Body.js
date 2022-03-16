import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../auth/login/Login'
import Signup from '../auth/sign up/Signup'
import ActivationEmail from '../auth/ActivationEmail'
import ForgotPassword from '../auth/forgotPassword/ForgotPassword'
import ResetPassword from '../auth/resetPassword/ResetPassword'

import { useSelector } from 'react-redux'
import Profile from './profile/Profile'
import Home from './Home/Home'
import HorizontalLinearStepper from '../HorizontalLinearStepper'

export default function Body() {

  const auth = useSelector(state => state.auth)
  const {isLogged, isAdmin} = auth
  
  return (
    <div>
      <section>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/book_ticket' element={<HorizontalLinearStepper/>} />

        <Route path='/login' element={isLogged ? <h1>You are already logged in</h1>:<Login/>} />
        <Route path='/signup' element={isLogged ? <h1>You are already registerd user if you want to join with another account first logout from cuurent account.</h1>:<Signup/>} />
        <Route path='/forgot_password' element={<ForgotPassword/>} />
        <Route path='/user/reset/:token' element={<ResetPassword/>} />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/user/activate/:activation_token' element={<ActivationEmail/>} />
        

        </Routes>
      </section>
    </div>
  )
}
