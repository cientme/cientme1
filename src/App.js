

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './componants/login/Login';
import Signup from './componants/signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<Login/>} />
          <Route path='/signin' element={<Signup/>} />
        </Routes>
      </Router>
      

    {/* <Signup/> */}
    {/* <Login/>  s */}
    </div>
  );
}

export default App;
