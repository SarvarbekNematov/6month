import React from 'react'
import { NotificationIcon } from '../../assets/img/icons'
import { Btn } from '../button/btn'

export const Navbar = () => {
  return (
    <div>
        <NotificationIcon/>
        <Btn type={"submit"} extraClass={"w-[120px] h-[40px] bg-[#509CDB] rounded-[8px]"}>Log out</Btn>
    </div>
  )
}
