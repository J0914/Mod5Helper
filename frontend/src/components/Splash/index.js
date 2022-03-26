import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';


import styles from './splash.module.css'

const Splash = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      history.push('/dashboard')
    }
  }, [user, history])

  return (
    <div className={styles.splashContainer}>
      <h1>Welcome to ModHelper.</h1>
      <h2>Please login or signup to continue.</h2>
    </div>
  )
}

export default Splash;