import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
  return (
    <div className='header bg-[#081730] flex item-center justify-between px[5rem] pt-[2.4rem] text-[.8rem]'>
        {/* Logo */}
        <img src={require("../img/MuzicLogo.png")} alt="" className="logo  w-[42px] h-[42px]"/>
        {/* Side Menu */}
        <CenterMenu/>
        {/* Button */}
        <div className="buttons flex">
            <button type="submit" className={'mr-[5px] hover:bg-[#24389b] ' +  buttonStyle}>Log in</button>
            <button type="submit" className={buttonStyle+ ' bg-[#232A4E]'}>Sign Up</button>
        </div>
    </div>
  )
}

export default Header