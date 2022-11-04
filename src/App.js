import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Car'
import PersonRegister from './components/PersonRegister'
import GameScore from './components/GameScore';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Cristina" />
      <Car owner="Penelope Charmosa"/>
      <PersonRegister name="Cristina" age={27} lastName="Jesus" job="Data Scientist" />
      <GameScore points={0}/>
    </div>
  );
}

export default App;