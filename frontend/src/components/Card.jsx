export default function card ({image, description}) {
    return (
       <div className="container">
        <img className="card" src={image} alt={description} />
        <p className="cardDescription">  {description} </p>
        </div>
      );
      
    }