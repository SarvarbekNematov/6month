import React from 'react'

export const Btn = ({
    children ,
    extraClass,
    extraClassTwo,
    type ,
    firstIcon ,
    lastIcon 
}) => {
  return (
    <button type={type} className={extraClass}>
        <div className={` ${firstIcon ? extraClassTwo : "text-center"}`}>
            {firstIcon ? firstIcon : ""}
                {children}
        </div>
        {lastIcon ? lastIcon : ""}
    </button>
  )
}
