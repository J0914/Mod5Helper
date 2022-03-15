import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {login} from '../../store/session'
import styles from './loginform.module.css';

 const LoginForm = () => {
   const [credential, setCredential] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);
   const [credentialBorder, setCredentialBorder] = useState('black')
   const [passwordBorder, setPasswordBorder] = useState('black')
   const [emailErr, setEmailErr] = useState([]);
   const [passwordErr, setPasswordErr] = useState([]);
   const [run, setRun] = useState(false);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
    setEmailErr([])
    setPasswordErr([])

    if (credential) {
      const emailRegex = new RegExp('[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}', 'i');
      if (!emailRegex.test(credential)) {
        setCredentialBorder('red')
        setEmailErr(['Please enter a valid email.'])
      }
      else if (emailRegex.test(credential)) setCredentialBorder('green')
    } else setCredentialBorder('black')
    
    if (password) {
      if (password.length < 6) {
        setPasswordBorder('red')
        setPasswordErr(['Password should be 6 or more characters.'])
      }
      else if (password.length >= 6) setPasswordBorder('green')
      else setPasswordBorder('black')
    }
    
  }, [run])

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors([])

    dispatch(login({credential, password}))
    .then(() => history.push('/dashboard'))
    .catch(async(res) => {
      const data = await res.json();
      setErrors(data.errors)
    })
  }

  return(
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit} id={styles.loginForm}>
        <h1 className={styles.loginFormHeader}>Login</h1>
        <ul>
          {errors.map(err => (
            <li className={styles.backendErr} key={err}>{err}</li>
          ))}
        </ul>
        <label htmlFor='credential'>Email:</label>
        <div className={styles.inputHolder}>
        <input 
        id='credential'
        className={styles.input}
        type='text'
        style={{border:`2px solid ${credentialBorder}`}}
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        onBlur={() => setRun(!run)}
        onFocus={() => setEmailErr([])}
        placeholder='Enter Email'
        />
        {emailErr.length > 0 && <ul>
          {emailErr.map(err => (
            <li className={styles.err} key={err}>{err}</li>
          ))}
        </ul>}
        </div>
        <label htmlFor='password'>Password:</label>
        <div className={styles.inputHolder}>
        <input 
        id='password'
        className={styles.input}
        type='password'
        style={{border:`2px solid ${passwordBorder}`}}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setRun(!run)}
        onFocus={() => setPasswordErr([])}
        placeholder='Enter Password'
        />
        {passwordErr.length > 0 && <ul>
          {passwordErr.map(err => (
            <li className={styles.err} key={err}>{err}</li>
          ))}
        </ul>}
        </div>
        <button
        type='submit'
        className={styles.submitBtn}
        >
          Login
        </button>
      </form>
    </div>
  )
 }

 export default LoginForm;