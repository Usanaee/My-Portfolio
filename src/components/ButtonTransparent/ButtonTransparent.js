import React from 'react'
import './ButtonTransparent.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function ButtonTransparent({btnText,msg}) {
  return (
    <div>
        {/* <button className="ButtonTransparent"><AnchorLink className='anchor-link' offset={50} href='#contact'>{btnText}</AnchorLink></button> */}
        <button className="ButtonTransparent" onClick={msg}>{btnText}</button>
    </div>
  )
}

export default ButtonTransparent