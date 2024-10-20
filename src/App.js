import './App.css';
import './componentes/css/components.css'
import { MainFrame } from './componentes/contenedores';
import { RouterMain } from './routes/routerMain';

function App() {
  return (
    <MainFrame>
      <RouterMain />
    </MainFrame>
  );
}

export default App;
