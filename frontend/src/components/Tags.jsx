function Tags({items}) {
    return (
        <div>
        {items.map((tagItem)=>(<button className="tag texttag"> {tagItem} </button>))}
        </div> 
    );
  }
  
  export default Tags;
  
  