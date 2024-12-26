import React, { useState } from 'react'

function Collapse({text, content}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button className='btn collapse textcollapse' onClick={() => setVisible(!visible)}>
       {text}
        <i class="fa-solid fa-angle-up"></i>
      </button>

      {visible && (
      <div className="collapse">
        <h4>{content}</h4>
      </div>
      )}

    </>
  )
}

export default Collapse ;
