import logo from "../../assets/logo.png"

function Header() {
    return (
    <header>
     <figure><img src={logo} alt="logo kasa" id="logo"/> </figure>
      <nav className="headerRight">
        <a href="/">Accueil</a>
        <a href="/propos">A Propos</a>
      </nav>
    </header> 
    );
  }
  
  export default Header;
  
  