import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import Picture from "../../components/Picture";

import Slider from "../../components/Slider";


function Apartement() {
  const params = useParams();
  const [record, setRecord] = useState([]);
  const [tags, setTags] = useState([]);
  const [slides, setSlides] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [picture, setPicture] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setRecord(data);
        setTags(data.tags);
        setSlides(data.pictures);
        setPicture(data.host.picture);
        setName(data.host.name)
        setEquipments(data.equipments)

      }
      );
  }, []);

  return (
    <main>
      <Slider slides={slides}></Slider>

      <div className="flex-appartment">
        <div className="left">
          <h1 className="title">{record.title}</h1>
          <h2 className="location">{record.location}</h2>
        </div>
        <div className="right">
          <Picture source={picture} name={name} />
        </div>
      </div>

      <div className="flex-appartment">
        <div className="left">
        <Tags items={tags} />
        </div>
        <div className="right">
        <Stars rating={record.rating} />
        </div>
      </div>

      <div className="flex-appartment">
          <Collapse css="collapse-item" text="Description" content={record.description} />
          <Collapse css="collapse-item" text="Equipement" content={equipments} />
      </div>




    </main>
  );
}

export default Apartement;