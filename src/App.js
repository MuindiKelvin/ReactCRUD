import './App.css';
import Create  from './components/Create';
import  Read  from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    //BEM
  <Router>

        <div className="main">
        <h2 className='main-header'>CRUD Operations in React JS by Kelvin Muindi</h2> 
        <h2>To create new records use; localhost:3000/create</h2>      

           <Switch>

                <Route path="/create">
                      <Create />
                  </Route>

                <div style={{ marginTop: 20 }}>
                    <Route path="/read">
                        <Read />
                      </Route>

                <Route path="/update" >
                     <Update />
                  </Route> 
                </div>  

                               

           </Switch>
    
    </div>
    </Router>
  );
}

export default App;
