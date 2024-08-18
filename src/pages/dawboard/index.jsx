import React from 'react'
import {ProfileIcon, SchoolIcon, StudentIconTwo, SupportIcon, UpperIcon} from "../../assets/img/icons"
import { Link } from 'react-router-dom'
import { Btn } from '../../components/button/btn'

export const Dawboard = () => {
  return (
    <>
      <div className=' ml-[128px] pt-[53px] text-[#4F4F4F] '>
        <h1 className='mb-[23px] text-[36px] font-semibold'>Welcome to your dashboard, Udemy school</h1>
        <strong className='ml-[106px] text-[24px] font-semibold'>Uyo/school/@teachable.com</strong>
          <ul className='w-[758px] pt-[68px] pl-[90px] space-y-[56px] pb-[68px]'>
            <li className='flex space-x-[20px] '>
              <div>
                <span className='block bg-[#EFF3FA] rounded-[8px] w-[36px] h-[36px] p-[6px]'><ProfileIcon/></span>
              </div>
              <div>
                <h3 className='text-[24px]'>Add other admins </h3>
                <p className='w-[464px] text-[14px] font-normal mt-[16px]'>Create rich course content and coaching products for your students. <br />
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
            <li className='flex space-x-[20px] '>
              <div>
                <span className='block bg-[#EFF3FA] rounded-[8px] w-[36px] h-[36px] p-[6px] '><SchoolIcon /></span>
              </div>
              <div>
                <h3 className='text-[24px]'>Add classes  </h3>
                <p className='w-[464px] text-[14px] font-normal mt-[16px]'>Create rich course content and coaching products for your students. <br />
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
            <li className='flex space-x-[20px] '>
              <div>
                <span className='block bg-[#EFF3FA] rounded-[8px] w-[36px] h-[36px] p-[6px]'><StudentIconTwo/></span>
              </div>
              <div>
                <h3 className='text-[24px]'>Add students </h3>
                <p className='w-[464px] text-[14px] font-normal mt-[16px]'>Create rich course content and coaching products for your students. <br />
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </li>
          </ul>

          <Link to={"/settings"} className='absolute right-[120px] bottom-0'>
              <Btn extraClassTwo={"flex gap-2 items-center"} firstIcon={<SupportIcon/>} lastIcon={<UpperIcon/>} extraClass={"py-[21px] pl-[24px] bg-[#152259] text-white flex item-center rounded-[30px] pr-[21px] gap-[39px]"}>Support</Btn>
          </Link>
      </div>
    </>
  )
}
