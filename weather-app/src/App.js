// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/weather';

function App() {
  const weather = useWeather();
  return (
    <div className="App container">
      <h1 style={{margin:"1em"}} >Weather Forecast</h1>
      <Input/> <br/>
      <Button onClick={weather.fetchData}
       value="search" />
      <Card/>
      <Button value="Refresh" />
    </div>
  );
}

export default App;
