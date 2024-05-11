import React from 'react'
import './Work.css'
import theme_pattern from  '../../media/theme_pattern.svg'
import work_data from '../../media/mywork_data'
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent'
import Swal from 'sweetalert2'
function Work() {
  
  let alertMsgForNewWork = () =>{
    Swal.fire({
        title: "Coming Soon",
        icon: "question",
        text: "New Projects Are Coming Soon!",

      });
   }

  return (
    <div className= "myWork" id="work">
        <div className='workTittle'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='workContainer'>
            {work_data.map((work,index)=> {
                return <img src={work.w_img} alt='' key={index}/>
            })}
        </div>
        <div className='showMore'>
        <ButtonTransparent btnText="Show More" msg={alertMsgForNewWork}/>
        </div>
    </div>
  )
}

export default Work