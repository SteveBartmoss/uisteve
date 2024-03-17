import logo from './logo.svg';
import './App.css';
import { MainFrame } from './componentes/contenedores';
import { RuoterUi } from './routes/routerUi';

function App() {
  return (
    <MainFrame>
      <RuoterUi />
    </MainFrame>
  );
}

export default App;
