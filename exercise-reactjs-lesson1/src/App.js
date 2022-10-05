import './App.css';
import Person from './Person';
import personData from './data.json';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPerson from './AddPerson';


function App() {
  const [listUser, setListUser] = useState(personData);
  const [isAddUser, setIsAddUser] = useState(false);
  const onSearch = (value) => {
    console.log("value is", value);
    const result = [...personData].filter(
      item => item.first_name.toLowerCase().indexOf(value.toLowerCase()) >= 0
    )
    setListUser(preState => preState = result);
  }
  const onSortByName = () => {
    const result = [...personData].sort(
      (a, b) => a.first_name.localeCompare(b.first_name)
    )
    setListUser(preState => preState = result);
  }
  const onSortBySalary = () => {
    const result = [...personData].sort(
      (a, b) => a.salary - b.salary
    )
    setListUser(preState => preState = result);
  }
  const addUser = () => {
    
    const result = true;

  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adduser">Add User</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Person data={listUser} onSearch={onSearch} onSortByName={onSortByName} onSortBySalary={onSortBySalary} addUser={addUser} />
          </Route>
          <Route path="/adduser">
            <AddPerson/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
