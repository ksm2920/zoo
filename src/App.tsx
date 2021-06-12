import './App.scss';
import { AnimalDetail } from './components/AnimalDetail';
import { PageNotFound } from './components/PageNotFound';
import { Animals } from './components/Animals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Animals></Animals>
        </Route>
        <Route path="/animal/:id">
          <AnimalDetail></AnimalDetail>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    
    );
  }
  
export default App;
  