import Banner from "../../components/Banner";
import image from "../../assets/image-acceuil.png"
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [records, setRecords] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/api/properties')
    .then(res => res.json())
    .then(data => setRecords(data));
  },[]);


  return (
    <main>
      <Banner imageSrc={image} text="Chez vous, partout et ailleurs"/>
      <div className="cards">
        {records.map((property)=>(
            <Link to={`/Apartement/${property.id}`} key={property.id}>
             <Card key={property.id} image={property.cover} description={property.title}  />
            </Link> 
        ))} 
      </div> 
    </main>
  );
}

export default Home;
