import { BrowserRouter as Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';

const  App = () => {
  return (
    <Route>
     <NavBar/>
    </Route>
    
  );
}

export default App;
