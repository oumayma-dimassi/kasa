import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import image from "../../assets/imagenature2.png"

function About () {
    return (
      <main>
        <Banner imageSrc={image} text=""/>
        <Collapse text="Fiabilité" content="content"/>
        <Collapse text="Respect" content="content"/>
        <Collapse text="Service" content="content"/>
        <Collapse text="Sécurité" content="content"/>
      </main>
      
    );
  }
  
  export default About;