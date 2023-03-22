import './App.css';
import{Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/sign' element={<Signup/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
