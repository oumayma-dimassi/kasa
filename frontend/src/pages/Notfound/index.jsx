
function Notfound () {
  return (
    <main >
      <p className="notfoundTitle">404</p>
      <p className="notfoundText">Oups! La page que vous demandez n'existe pas.</p>
      <a  href="/" >
      <p className="notfoundText2">Retourner sur la page d’accueil</p>
      </a>
    </main>
  );
};

export default Notfound