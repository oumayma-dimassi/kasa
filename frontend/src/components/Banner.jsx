
export default function Banner ({imageSrc, text}) {
return (
   <div className="container">
      <figure>
        <img src={imageSrc} alt="image nature" className="banner" />
      </figure>
      <p className="imgtext"> {text} </p>
    </div>
  );
  
}