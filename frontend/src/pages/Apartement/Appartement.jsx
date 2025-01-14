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
        if (data === "Not found") {
          window.location.href = '/404';
        }
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


      <div className="grid">
        <div className="one">
          <h1 className="title">{record.title}</h1>
          <p className="location">{record.location}</p>
        </div>
        <div className="two">
          <Picture source={picture} name={name} />
        </div>
        <div >
          <Stars rating={record.rating} />
        </div>

        <div className="tags three">
          <Tags items={tags} />
        </div>

        </div>

        <div className="flex-collapse">
        <Collapse css="collapse-item1 collapse1" text="Description" content={record.description} />
        <Collapse css="collapse-item2 collapse2" text="Equipement" content={equipments} />
      </div>

    </main>
  );
}

export default Apartement;