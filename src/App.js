//import logo from './logo.svg';
import TiraPeliculas from "./components/TiraPelicula";
import ContenedorPublicidad from "./components/ContenedorPublicidad";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import MiComponente from "./components/MiComponente";
import gif from "./components/gif"
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <ContenedorPublicidad>
          <h2>Woow! Publicidad!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas />
        <MiComponente/>
        <Contador inicial={0}/>
        <ContenedorPublicidad>
          <ul>
            <li>Public 1</li>
            <li>Public 2</li>
            <li>Public 3</li>
          </ul>
        </ContenedorPublicidad>
        <Saludo titulo="Hola mundo" subtitulo="¡Nunca paremos de aprender!" />
      </main>
    </div>
  );
}

export default App;
