import React from 'react'
import { Input } from '../../components/input'
import { Btn } from '../../components/button/btn'

export const SignUp = () => {
  
  return (
    <>
      <div className='pt-[4%] bg-[#FCFAFA] h-[100vh]'>
        <h1 className='text-center text-[36px] font-semibold mb-[53px]'>Welcome, Sign up</h1>
        <form  autoComplete='off' className='pt-[72px] grid grid-cols-1 text-center w-[512px] mx-auto bg-white pb-[39px]'>
          <h3 className='w-[248px] mx-auto '>It is our great pleasure to have you on board! </h3>
          <Input name={"login"} isRequired={true} extraClass={"mt-[34px] mx-auto"} placeholder={"Enter your Email"} type={"email"}/>
          <Input name={"login"} isRequired={true} extraClass={"mt-[14px] mx-auto"} placeholder={"Create your Login"} type={"text"}/>
          <Input isRequired={true} name={"password"} extraClass={"mx-auto mt-[14px]"} placeholder={"Create your Password"} type={"password"}/>
          <Btn type={"submit"} extraClass={"w-[248px] pt-[11px] pb-[12px] bg-[#2D88D4] rounded-[4px] text-white mx-auto mt-[34px] mb-[14px]"}>Sign up</Btn>
        </form>
      </div>
    </>
  )
}
