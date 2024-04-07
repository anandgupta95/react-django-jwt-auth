import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Registration from './pages/Register.jsx'
import Task from './pages/Task.jsx'

function App() {
  return(
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Registration/>} />
    </Routes>
    </BrowserRouter>
  
    
    
  );
 
}

export default App
