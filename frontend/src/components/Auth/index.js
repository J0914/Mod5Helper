import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

import styles from './auth.module.css'

const Auth = ({auth}) => {

  return (
    <div className={styles.authContainer}>
    {auth === 'login' ? 
    <LoginForm /> 
    :
    <SignupForm />
    }
    </div>
  )
}

export default Auth;