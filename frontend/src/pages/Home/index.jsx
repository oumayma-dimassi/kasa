import Banner from "../../components/Banner";
import image from "../../assets/image-acceuil.png"
function Home() {
  return (
    <main>
      <Banner image={image}/>
      <p className="imgtext">Chez vous, partout et ailleurs</p>
    </main>
  );
}

export default Home;

