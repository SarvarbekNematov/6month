import React, { useContext } from 'react'
import { Btn } from '../../components/button/btn'
import { Input } from '../../components/input'
import { Context } from '../../context'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

export const AddTeachers = () => {
  const {  setState} = useContext(Context)
  const navigate = useNavigate()
  const HandleSubmitData = (e) => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name: e.target.fullName.value,
      class: e.target.class.value,
      email: e.target.emailAddress.value,
      gender: e.target.gender.value,
      subject: e.target.subject.value,
      age: e.target.age.value,
      about: e.target.about.value,
      img: e.target.imgInp.value
    }

    const obj = JSON.parse(localStorage.getItem("state"))
    const arr = [...obj]
    arr.push(data)
    
    setState(arr)
    navigate("/teachers")
  }

  return (
    <>
      <div className='pl-[38px]'>
        
        

        <form autoComplete='off' onSubmit={HandleSubmitData} className='mt-[24px] space-y-[26px]'>\

        <div className='flex justify-between items-center py-[14px] '>
          <h2 className='text-[20px] font-medium'>Add teacher</h2>
          <Btn extraClass={"py-[12px] pl-[14px] pr-[12px] bg-[#509CDB] text-white rounded-[4px] " } type={"submit"}>Save</Btn>
        </div>


          <div className='flex gap-[74px]'>
            <div className='grid grid-cols-1'>
              <label htmlFor="fullname">Full Name</label>
              <Input isRequired={true} id={'fullname'} name={"fullName"} placeholder={"Full Name"} type={"text"} extraClass={"py-[13px] pl-[10px] rounded-2 w-[406px]"}/>
            </div>
            <div className='grid grid-cols-1'>
              <label htmlFor="class">Class</label>
              <Input isRequired={true} id={'class'} name={"class"} placeholder={"Class"} type={"text"} extraClass={"py-[13px] pl-[10px] rounded-2 w-[406px]"}/>
            </div>
          </div>
          <div className='flex gap-[74px]'>
            <div className='grid grid-cols-1'>
              <label htmlFor="emailaddress">Email address</label>
              <Input isRequired={true} id={'emailaddress'} name={"emailAddress"} placeholder={"Email address"} type={"email"} extraClass={"py-[13px] pl-[10px] rounded-2 w-[406px]"}/>
            </div>
            <div className='grid grid-cols-1'>
              <label htmlFor="gender">Gender</label>
              <select  className='py-[8px] pl-[10px] rounded-2 w-[406px] border-2' name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className='flex gap-[74px]'>
            <div className='grid grid-cols-1'>
              <label htmlFor="Subject">Subject</label>
              <Input isRequired={true} id={'Subject'} name={"subject"} placeholder={"Subject"} type={"text"} extraClass={"py-[13px] pl-[10px] rounded-2 w-[406px]"}/>
            </div>
            <div className='grid grid-cols-1'>
              <label htmlFor="Age">Age</label>
              <Input isRequired={true} id={'Age'} name={"age"} placeholder={"Age"} type={"number"} extraClass={"py-[13px] pl-[10px] rounded-2 w-[406px]"}/>
            </div>
          </div>
            
            <div className='flex gap-[74px]'>
              <div className='grid grid-cols-1' >
                <label htmlFor="About" className=''>About</label>
                <textarea required className='w-[406px] border-2 h-[172px]' name="about" id="About"></textarea>
              </div>

              <div  className='pt-[20px]'>
                <label className='text-[18px] font-semibold' htmlFor="imgInp">Import Img</label>
                <input id="imgInp" name="imgInp" type="file" className='hidden '/>
              </div>
            </div>

            
            
        </form>
      </div>
    </>
  )
}
