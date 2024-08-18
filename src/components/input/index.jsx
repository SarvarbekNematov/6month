import React from 'react'

export const Input = ({
    type,
    placeholder,
    name,
    extraClass,
    isRequired,
    id
}) => {
  return (
    <input id={id} type={type} placeholder={placeholder} name={name} className={`w-[248px] h-[42px] rounded-[4px] border-2 pl-[13px] ${extraClass}`} required={isRequired} />
  )
}
