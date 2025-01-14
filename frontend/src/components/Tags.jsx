function Tags({items}) {
    return (
        <>
        {items.map((tagItem)=>(<button className="tag texttag"> {tagItem} </button>))}
        </> 
    );
  }
  
  export default Tags;
  
  