import {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Splash from './components/Splash'
import Navigation from './components/Navigation'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import {restoreUser, getAllModUsers} from './store/session';
import {loadAllMods} from './store/mod';



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const [auth, setAuth] = useState('login')
  const history = useHistory();

  useEffect(() => {
    dispatch(restoreUser())
    .then(() => dispatch(loadAllMods()))
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!user) return(
    <>
      <Navigation setAuth={setAuth} />
      <Switch>
      <Route exact path='/'>
        <Splash />
      </Route>
      <Route path='/auth'>
        <Auth auth={auth} />
      </Route>
      <Route path='*'>
        <div className='fourohfourContainer'>
        <h1 className='fourohfour'>Either this page doesn't exist, or you're not logged in. :)</h1>
        </div>
      </Route>
      </Switch>
    </>
  )

  else return isLoaded && (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/'>
        <Splash />  
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
