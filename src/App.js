import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './component/Navbar';
import One from './component/One';
import Two from './component/Two';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Route  path='/one' component={One}/>
        <Route  path='/two' component={Two}/>
        <Route  path='/Profile' component={Profile}/>

        
        </BrowserRouter>

    </div>
  );
}

export default App;
