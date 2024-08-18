import React from 'react'
import { BillingIcon, ExamsIcon, HomeIcon, LogoIcon, SettingsIcon, StudentIcon } from '../../assets/img/icons'
import { Link, NavLink } from 'react-router-dom'

export const SiteBar = () => {
  const navList = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
      icon: <HomeIcon/>
    },
    {
      id: 2,
      title: "Teachers",
      path: "/teachers",
      icon: <HomeIcon/>
    },
    {
      id: 3,
      title: "Students",
      path: "/students",
      icon: <StudentIcon/>
    },
    {
      id: 4,
      title: "Billing",
      path: "/billing",
      icon: <BillingIcon/>
    },
    {
      id: 5,
      title: "Settings and profile",
      path: "/settings",
      icon: <SettingsIcon/>
    },
    {
      id: 6,
      title: "Exams",
      path: "/exams",
      icon: <ExamsIcon/>
    },
  ]
  return (
    <>
      <div className='w-[241px] bg-[#152259] pt-[26px] h-screen overflow-y-auto fixed    '>
        <div className='pb-[27px] border-b-[2px] border-[#BDBDBD]'>
          <Link to={"/"} className='block w-[65px] mx-auto'><LogoIcon/></Link>
          <p className='text-[14px] text-center text-white mt-[12px]'>Udemy Inter. school</p>
        </div>
        <div className='pt-[16px]'>
            <ul className='pl-[28px]  space-y-[8px]'>
              {navList.map((item) => (
                <li key={item.id} className='w-[192px]'>
                  <NavLink to={item.path} className={"flex  h-[40px] space-x-[16px] items-center text-white rounded-[4px] pl-[16px]"}>
                    <span className='inline-block text-white'>{item.icon}</span>
                    <h3 className='text-[14px]'>{item.title}</h3>
                  </NavLink>
                </li>
              ))}
            </ul>
        </div>
        <div className='pl-[28px] mt-[114px]'>
          <Link className={"flex w-[192px] h-[40px] items-center text-white rounded-[4px] pl-[16px]"}>
            <BillingIcon/>
            <h3 className='text-[14px] ml-[16px]'>Features</h3>
            <span className='block w-[41px] h-[14px] rounded-[8px] bg-[#B9D7F1] text-black text-[10px] ml-[26px] pl-[8px] font-bold'>NEW</span>
          </Link>
        </div>
      </div>
    </>
  )
}
