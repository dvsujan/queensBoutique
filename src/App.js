import React,{useEffect,useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddUser from './componenets/adduser/AddUser';
import SearchUser from './componenets/searchuser/SearchUser';
import AddOrder from './componenets/addorder/AddOrder';
import SearchDate from './componenets/searchDate/SearchDate';

function App() {
  const [totalUsers, setTotalUsers] = useState(0);
  useEffect(() => {
    fetch('https://queensbotique.onrender.com/api/user/total')
      .then(res => res.json())
      .then(data => {
        setTotalUsers(data.count);
        console.log(data); 
      })
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>
            <h1>total Customers: {totalUsers}</h1>
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1>

              <Link to="/search/date">search orders by date</Link>
            </h1>
            <h1>
              <Link to="/user/add">addUser</Link>
            </h1>
            <h1>
              <Link to="/user/search">searchUser</Link>
            </h1>
          </div>} />
          <Route
            path="/user/add"
            element={
              <AddUser />
            }
          />
          <Route
            path="/user/search"
            element={
              <SearchUser />
            }
          />
          <Route
            path="/order/add/:userId"
            element={
              <AddOrder />
            }
          />
          <Route
            path="/search/date"
            element={
              <SearchDate />
            }
          />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
