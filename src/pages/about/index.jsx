import React, { useContext } from 'react'
import Aboutimg from "../../assets/img/about.png"
import { Context } from '../../context'
import { CallIcon, MessageIcon, StudentAboutIcon } from '../../assets/img/icons'

export const About = ({id}) => {
  const {state , setState} = useContext(Context)
  const findedItem = state.find(item => item.id == id);
  console.log(findedItem)
  return (
    <div className='pl-[59px] flex'>
      <div className='pt-[66px] pl-[163px] text-center'>
        <div>
          <img src={Aboutimg} alt="img" width={280} height={280} />
        </div>       
        <h2 className='mt-[50px] text-[16px] font-bold'>Kristin Watson</h2>
        <p className='text-[14px] font-bold text-[#A7A7A7]'>Chemistry teacher</p>
        <div className='flex space-x-[25px] ml-[11px] mt-[40px]'>
          <span className='block w-[60px] h-[60px] pt-[11px] pl-[13px] bg-[#EFF3FA] rounded-[8px]'><StudentAboutIcon/></span>
          <span className='block w-[60px] h-[60px] pt-[11px] pl-[13px] bg-[#EFF3FA] rounded-[8px]'><CallIcon/></span>
          <span className='block w-[60px] h-[60px] pt-[11px] pl-[13px] bg-[#EFF3FA] rounded-[8px]'><MessageIcon/></span>
        </div>
      </div>
      <div className='pl-[105px] pt-[100px]'>
        <h2 className='text-[16px] font-semibold '>About</h2>
        <p className='mt-[16px] text-[16px] text-[#A7A7A7] w-[335px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
        <div className='flex space-x-[35px] pt-[30px] pl-[14px]'>
          <div className='w-[133px]'>
            <strong className='text-[12px] font-semibold'>Age</strong>
            <p className='text-[14px] font-medium text-[#A7A7A7]'>34</p> 
          </div>
          <div className='w-[133px]'>
            <strong className='text-[12px] font-semibold'>Gender</strong>
            <p className='text-[14px] font-medium text-[#A7A7A7]'>Male</p>
          </div>
        </div>
      </div>
    </div>
  )
}
