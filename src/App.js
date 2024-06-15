import './App.css';
import './componentes/css/components.css'
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
