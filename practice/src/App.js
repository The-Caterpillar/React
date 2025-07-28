import './App.css';
import ManagerList from './components/ManagerList';
import TrainerList from './components/TrainerList';
import DeveloperList from './components/DeveloperList';

const employees = [
  {name:"John Doe", position:"Manager"},
  {name:"Jane Smith", position:"Developer"},
  {name:"Samuel Green", position:"Trainer"},
  {name:"Mike Brown", position:"Developer"},
  {name:"Emily White", position:"Trainer"},
  {name:"Chris Evans", position:"Manager"},
];

function App() {
  return (
    <div className="App">
      <ManagerList employees={employees}/>
      <DeveloperList employees={employees}/>
      <TrainerList employees={employees}/>
    </div>
  );
};

export default App;
