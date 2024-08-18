import React, { useContext } from 'react'
import { Input } from '../../components/input'
import { Btn } from '../../components/button/btn'
import { Link } from 'react-router-dom'
import { Context } from '../../context'

export const SignIn = () => {
  const {setToken } = useContext(Context)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value.trim(),
    }
    if(data.login == "Nurillo" && data.password == "123"){
      setToken(data)
      e.target.reset()
    }
    else{
      alert("Xatolik bor")
    }
  }
  return (
    <>
      <div className='pt-[104px] bg-[#FCFAFA] h-[100vh]'>
        <h1 className='text-center text-[36px] font-semibold mb-[53px]'>Welcome, Log into you account</h1>
        <form  autoComplete='off' onSubmit={handleSubmitLogin} className='pt-[72px] grid grid-cols-1 text-center w-[512px] mx-auto bg-white pb-[39px]'>
          <h3 className='w-[248px] mx-auto'>It is our great pleasure to have you on board! </h3>
          <Input name={"login"} isRequired={true} extraClass={"mt-[14px] mx-auto"} placeholder={"Enter your Login"} type={"text"}/>
          <Input isRequired={true} name={"password"} extraClass={"mx-auto mt-[14px]"} placeholder={"Enter Password"} type={"password"}/>
          <Btn type={"submit"} extraClass={"w-[248px] pt-[11px] pb-[12px] bg-[#2D88D4] rounded-[4px] text-white mx-auto mt-[14px] mb-[14px]"}>Login</Btn>
          <Link to={"/sign-up"} className='text-[#2D88D4]' >Sign up</Link>
        </form>
      </div>
    </>
  )
}
