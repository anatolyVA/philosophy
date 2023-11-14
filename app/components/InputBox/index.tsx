import React from 'react'
import './style.css'

type Props = {
    type: string;
    placeholder?: string;
    className: string;
}

function InputBox({type, placeholder, className} : Props) {
  return (
    <input className={className} placeholder={placeholder} type={type}></input>
  )
}

export default InputBox