import './App.css';
import Person from './Person';
import personData from './data.json';

function App() {
  return (
    <div>
        <Person data={personData}/>
    </div>
  );
}

export default App;
