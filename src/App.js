

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './componants/login/Login';
import Signup from './componants/signup/Signup';
import Home from './componants/home/Home';
import Post from './componants/post/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Post/>} />
        </Routes>
      </Router>
  

 
    </div>
  );
}

export default App;
