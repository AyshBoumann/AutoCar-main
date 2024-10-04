import "../App.css"; // Importação do arquivo de estilos CSS

const Header = ({ changeTheme }) => {
  return (
    <header className="header">
      <h1>AutoCar</h1>
      <div className="quadrado-temas">
        <div
          className="quadrado-tema laranja"
          onClick={() => changeTheme("laranja")}
          title="Tema Laranja"
        ></div>
        <div
          className="quadrado-tema roxo"
          onClick={() => changeTheme("roxo")}
          title="Tema Roxo"
        ></div>
        <div
          className="quadrado-tema verde"
          onClick={() => changeTheme("verde")}
          title="Tema Verde"
        ></div>
      </div>
    </header>
  );
};

export default Header;