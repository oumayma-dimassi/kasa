import React, { useState, useRef, useEffect } from 'react';

export default function Collapse({ text, content }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');

  const contentRef = useRef(null);

  const style = {
    transform: isExpanded ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  };

  let expandedContent;

  if (Array.isArray(content)) {
    expandedContent = content.map((item) => (
      <li key={item} className='inline'>{item}</li>
    ));
  } else {
    expandedContent = content;
  }


  useEffect(() => {
    if (isExpanded) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight('0px');
    }
  }, [isExpanded]);

  return (
    <div className="collapse">
      <button className='btn collapse textcollapse' onClick={() => setIsExpanded(!isExpanded)}>{text}
        <i className="fa-solid fa-angle-up" style={style}></i>
      </button>
      <div
        className="collapse-elem"
        style={{ height: contentHeight }}
        ref={contentRef}>
        <p className='collapse-text'> {expandedContent} </p>
      </div>
    </div>
  );
}