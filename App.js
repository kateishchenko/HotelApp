import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {HotelGuest} from './HotelGuest';
import {Room} from './Room';
import {Reservation} from './Reservation';
import {Payment} from './Payment';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Hotel Katerina!
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/hotelguest">
              HotelGuest
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/room">
              Room
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/reservation">
            Reservation
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/payment">
              Payment
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>} />
        <Route path='/employee' element={<Employee/>} />
        <Route path='/hotelguest' element={<HotelGuest/>} />
        <Route path='/room' element={<Room/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
