import React from 'react'
import { NotificationIcon } from '../../assets/img/icons'
import { Btn } from '../button/btn'

export const NavbarDawboard = () => {
  return (
    <>
        <div className='flex pt-[29px] items-center justify-between bg-[#FCFAFA] pb-[15px] w-[1198px] pr-[127px]'>
            <h2 className='text-[16px] font-normal ml-[124px]'> <strong className='font-medium'>Learn  how to launch faster</strong> <br />
            watch our webinar for tips from our experts and get a limited time offer.</h2>
            <div className='flex space-x-[48px] items-center'>
                <NotificationIcon/>
                <Btn type={"submit"} extraClass={"w-[120px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold"}>Log out</Btn>
            </div>
        </div>
    </>
  )
}
