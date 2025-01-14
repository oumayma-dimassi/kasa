 
export default function Picture({source,name}){

  let result;

  if(name != undefined){
    let words = name.split(" ");

    result = words.map((item) => (
      <p className="nameItem">{item} </p>
    ));
  }
  
 

    return (
       <>
          
          <figure className="hostpicture">
          <h4 className="name">{result}</h4>
            <img src={source} alt="image homme" className="pic" />
          </figure>
          
        </>
      );
} 

