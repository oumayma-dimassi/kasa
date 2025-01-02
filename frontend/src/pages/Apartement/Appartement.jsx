import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
function Apartement() {
  const params = useParams();
  const [record, setRecord] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setRecord(data);
        setTags(data.tags)
      }
      );
  }, []);

  return (
    <main>
      <img src={record.cover} alt="image" className="img" />
      
      <h1 className="title">{record.title}</h1>
      <h2 className="location">{record.location}</h2>
      <Stars rating={record.rating}/>
      <Tags items={tags} />

      <div className="descriptionBloc">
        <Collapse text="Description" content={record.description} />
        <Collapse text="Equipement" content={record.equipments} />
      </div>
     

    </main>
  );
}

export default Apartement;