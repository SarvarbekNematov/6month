import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../../pages/login/sign-in'
import { SignUp } from '../../pages/login/sign-up'

export const LoginRoute = () => {
  return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
  )
}
