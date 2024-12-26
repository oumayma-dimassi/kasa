import Banner from "../../components/Banner";
import image from "../../assets/image-acceuil.png"
import Card from "../../components/Card";
import { useEffect, useState } from "react";

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
            <Card key={property.id} image={property.cover} description={property.title} />
        ))} 
      </div> 
    </main>
  );
}

export default Home;
