import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";
import TileList from './tiles';
import Logout from './logout';

//without id params
export default function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>       
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books">
            <TileList />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

//with id params
// export default function App() {
//   return (
//     <Router>
//       <div>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/zillow-group">Zillow Group</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/modus-create">Modus Create</Link>
//           </li>
//         <hr/>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>

//       </div>
//     </Router>
//   )
// }

function Home(){
  return (
    <div>
      <h3>Welcome to shopping!!</h3>
      
    </div>
  );
}

function Observations(){
  return (
    <div>
      <h3>Observations</h3>
    </div>
  );
}

function Dashboard(){
  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
}

// Use child params
function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID:{id}</h3>
    </div>
  );
}


