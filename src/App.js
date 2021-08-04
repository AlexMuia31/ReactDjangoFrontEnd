
import './App.css';
import ButtonAppBar from './components/Header';
import PostLoading from './components/PostLoading';
import Posts from './components/Posts';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <ButtonAppBar />
      <div className="App">
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/postloading' exact><PostLoading /></Route>
          <Route path='/posts' exact><Posts /></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
