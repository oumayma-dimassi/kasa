import React, { useState } from 'react'

function Collapse({text, content}) {
  const [visible, setVisible] = useState(false);

  const style = {
    transform: visible ? 'rotate(180deg)' : '', 
    transition: 'transform 500ms ease', 
   }

  return (
    <div>
      <button className='btn collapse textcollapse' onClick={() => setVisible(!visible)}>
       {text}
        <i class="fa-solid fa-angle-up" style={style}></i>
      </button>

      <div className={`text-container ${visible ? 'revealed' : 'hidden'}`}>
        <p>{content}</p>
      </div>     

    </div>



  )
}

export default Collapse ;
