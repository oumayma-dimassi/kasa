 
export default function Picture({source,name}){

    return (
       <div className="">
          
          <figure className="host">
          <h3 className="name">{name}</h3>
            <img src={source} alt="image homme" className="pic" />
          </figure>
          
        </div>
      );
} 

