import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Registration from './pages/Register.jsx'
import Task from './pages/Task.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'

function App() {
  return(
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Registration/>} />
    <Route path='/private'element={<ProtectedRoute/>} >
        <Route path='task' element={<Task/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  
    
    
  );
 
}

export default App
