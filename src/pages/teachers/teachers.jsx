import React, { useContext, useEffect } from 'react'
import { Btn } from '../../components/button/btn'
import { Input } from '../../components/input'
import { Koala } from '../../assets/img/koala'
import { Link, useNavigate } from 'react-router-dom'
import { SupportIcon, UpperIcon } from '../../assets/img/icons'
import { Context } from '../../context'
import { CiCircleMore } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { About } from '../about'

export const Teachers = () => {
  const {state } = useContext(Context)
  const navigate = useNavigate()
  const HandleSubmitMore = () => {

      navigate("/about")
  }
  const HandleSubmitEdit = () => {
    navigate("/addteachers")
  }
  


  return (
    <>
      <div className='pl-[38px] '>
        <div className='flex items-center justify-between py-[14px]'>
          <h3 className='text-[20px] '>Teachers</h3>
          <Link to={"/addteachers"}>
            <Btn extraClass={"bg-[#509CDB] rounded-[4px] py-[12px] px-[14px]"} type={"submit"}>Add Teachers</Btn>
          </Link>
        </div>
        <div className='pt-[14px]'>
          <form>
            <Input placeholder={"Search for a student by name or email"} type={"search"} name={"searchInput"} extraClass={"border-none bg-[#FCFAFA] pl-[16px] py-[16.5px] !w-[100%]"}/>
          </form>
        </div>
        
        <div className='bg-[#FCFAFA] mt-[30px] h-[419px] relative'>
        {
   state.length > 0 ? 
    <ul>
      <li className='flex h-[48px]'>
        <div className='w-[180px] py-[17px] pl-[8px]'><strong>Name</strong></div>
        <div className='w-[144px] py-[17px] pl-[8px]'><strong>Subject</strong></div>
        <div className='w-[164px] py-[17px] pl-[8px]'><strong>Class</strong></div>
        <div className='w-[287px] py-[17px] pl-[8px]'><strong>Email address</strong></div>
        <div className='w-[180px] py-[17px] pl-[8px]'><strong>Gender</strong></div>
      </li>
      {state.map((item) => (
        
        <li className='flex h-[48px] items-center'>
          <div className='w-[180px] py-[12px] pl-[8px] flex items-center'>
            {
              item.img != null ? <img className='rounded-[50%]' src={item.img} alt="img" width={24} height={24} /> : ""
            }
            <p className='pl-[8px]'>{item.name}</p>
          </div>
          <div className='w-[144px] py-[17px] pl-[8px]'>
            <p>{item.subject}</p>
          </div>
          <div className='w-[164px] py-[17px] pl-[8px]'>
            <p>{item.class}</p>
          </div>
          <div className='w-[287px] py-[17px] pl-[8px]'>
            <p>{item.email}</p>
          </div>
          <div className='w-[180px] py-[17px] pl-[8px]'>
            <p>{item.gender}</p>
          </div>
          <div className='w-[100px] flex gap-[20px] items-center'>
              <button onClick={HandleSubmitMore} className='border-none bg-none '><CiCircleMore /></button>
              <button onClick={HandleSubmitEdit} className='border-none bg-none'><MdEdit /></button>
              <button className='border-none bg-none'><MdDelete /></button>
          </div>
        </li>
      ))
        
      }
    </ul>
   : (
    <div>
      <div className='w-[340px] mx-auto pt-[14px]'>
        <Koala/>
      </div>
      <h2 className='text-[28px] font-semibold text-center'>No Teachers at this time</h2>
      <p className='text-center text-[14px] font-medium'>Teachers will appear here after they enroll in your school.</p>
      <Link to={"/settings"} className='absolute right-[120px] bottom-[35px]'>
        <Btn extraClassTwo={"flex gap-2 items-center"} firstIcon={<SupportIcon/>} lastIcon={<UpperIcon/>} extraClass={"py-[21px] pl-[24px] bg-[#152259] text-white flex item-center rounded-[30px] pr-[21px] gap-[39px]"}>
          Support
        </Btn>
      </Link>
    </div>
  )
}

            
        </div>
      </div>
    </>
  )
}
