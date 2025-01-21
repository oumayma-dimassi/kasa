export default function Banner ({imageSrc, text}) {
return (
   <div className="container">
      <figure className="bannerimg">
        <img src={imageSrc} alt="nature" className="banner" />
      </figure>
      <p className="imgtext"> {text} </p>
    </div>
  );
  
}