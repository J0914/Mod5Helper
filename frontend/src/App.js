import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Splash from './components/Splash'
import Navigation from './components/Navigation'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import {restoreUser} from './store/session';



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
    <Navigation setAuth={setAuth} />
    <Switch>
      <Route exact path='/'>
        <Splash />
      </Route>
      <Route path='/auth'>
        <Auth auth={auth} />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/mods'>
        
      </Route>
    </Switch>
    </>
  );
}

export default App;
