function Tags({items}) {
    return (
        <div className="tags">
        {items.map((tagItem)=>(<button className="tag texttag"> {tagItem} </button>))}
        </div> 
    );
  }
  
  export default Tags;
  
  