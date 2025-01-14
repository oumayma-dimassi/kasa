import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import image from "../../assets/imagenature2.png"
import myData from '../../data/collapse.json';

function About () {
    return (
      <main>
        <Banner imageSrc={image} text=""/>

<div className="abouts">
        {myData.map((item)=>(<Collapse text={item.title} content={item.content}/>))}

        
</div>
        
      </main>
      
    );
  }
  
  export default About;