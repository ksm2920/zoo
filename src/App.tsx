import './App.scss';
import { Animal } from './components/Animal';
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
          <Animal></Animal>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    
    );
  }
  
export default App;
  