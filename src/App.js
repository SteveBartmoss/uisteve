import logo from './logo.svg';
import './App.css';
import { MainFrame } from './componentes/contenedores';
import { MaenuVertical } from './componentes/MenuVertical';

function App() {
  return (
    <MainFrame>
      <MaenuVertical />
      <h1>Hola</h1>
    </MainFrame>
  );
}

export default App;
