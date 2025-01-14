import React, { useCallback, useState } from 'react'

function Collapse({ text, content, css }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded);
  }, []);

  const style = {
    transform: isExpanded ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  }

  let result;

  if (Array.isArray(content)) {
    result = content.map((item) => (
      <li key={item} className='inline'>{item}</li>
    ));
  } else {
    result = content;
  }

  return (
    <div className={css}>

      <button className='btn collapse textcollapse collapse1' onClick={toggleIsExpanded}>{text}
        <i class="fa-solid fa-angle-up" style={style}></i>
      </button>
      <div
        className="collapse-elem"
        style={{ height: isExpanded ? "180px" : "0px" }}>
        <p className='collapse-text'> {result} </p>
      </div>
    </div>
  )
}

export default Collapse;
