import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import image from "../../assets/imagenature2.png"
import myData from '../../data/collapse.json';

export default function  About() {
  return (
    <main>
      <Banner imageSrc={image} text="" />
      
      <div className="abouts">
        {myData.map((item) => (<Collapse key={item.title} text={item.title} content={item.content} />))}
      </div>

    </main>

  );
}

