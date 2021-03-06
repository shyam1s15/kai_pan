//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbarr from './components/navbar';
import Addtournament from './components/Tournaments/addtournament';
import Tournamentt from './components/Tournaments/tournamentlist';
import Schedule from './components/Schedule/schedulelist';
import Schedulee from './components/Schedule/addschedule';
import Home from './components/home';

function App() {
  return (
    <>
    <Router>
    <Navbarr />
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/addtournament' component={Addtournament} />
        <Route path='/tournamentlist' component={Tournamentt} />
        <Route path='/addschedule' component={Schedulee} />
        <Route path='/schedulelist' component={Schedule} />
    </Switch>
    </Router>

    </>
  );
}

export default App;
