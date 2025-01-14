import React, { useState } from 'react'

function Collapse({ text, content, css }) {
  const [visible, setVisible] = useState(false);

  const style = {
    transform: visible ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  }

  let result;

  if(Array.isArray(content)){
    result = content.map((item) => (
      <li key={item} className='inline'>{item}</li>
    ));
  }else{
    result = content;
  }




  return (
    <div className={css}>

      <button className='btn collapse textcollapse collapse1' onClick={() => setVisible(!visible)}>
        {text}
        <i class="fa-solid fa-angle-up" style={style}></i>
      </button>

      <div className={`text-container ${visible ? 'revealed' : 'hidden'}`}>
        <p>{result}</p>
      </div>

    </div>



  )
}

export default Collapse;
