import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {createProjectWalkthru, deleteProjectWalkthru} from '../../store/projectwalkthru';

import styles from './projectcard.module.css'

const Projectwalkthru = ({projectId, walkthrus}) => {
  const dispatch = useDispatch();
  const [createWalkthru, setCreateWalkthru] = useState(false);
  const [duration, setDuration] = useState(30);
  const users = useSelector(state => state.session.modUsers);
  const [userId, setUserId] = useState(users[0].id || 0);

  const SubmitWalkthru = async(e) => {
    e.preventDefault();
    const walkthru = {
      duration,
      userId,
      projectId
    }
    await dispatch(createProjectWalkthru(walkthru))
    .then(() => setCreateWalkthru(false));
  }
  
  return(
    <div className={styles.walkthruContainer}>
      <div>
      <h3 className={styles.walkthruHeader}>Eod Walkthrough:</h3>
      <button 
      className={styles.projectCardBtn} 
      onClick={() => setCreateWalkthru(!createWalkthru)}
      >{createWalkthru ? 'Cancel' : 'Create New'}
      </button>
      </div>
      {createWalkthru && 
          <form className={styles.walkthruForm} onSubmit={SubmitWalkthru}>
            <select
              className={styles.walkthruDropdown}
              name='userId'
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            >
              {users.map(user => (
                <option 
                key={user.id} 
                value={user.id}
                >{user.fname} {user.lname}
                </option>
              ))}
            </select>
            <input 
            className={styles.durationInput}
            type='number' 
            inputmode="numeric"
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            />
            <button 
            className={styles.projectCardBtn}
            type='submit'
            >Create
            </button>
          </form>
        }
      <ul className={styles.walkthruUl}>
        {walkthrus.map(walkthru => {
          const user = users.find(user => user.id === walkthru.userId);
          return (<li className={styles.walkthruLi} key={walkthru.id}>
            <div className={styles.walkthruInfoContainer}>
            <h4>{user.fname} {user.lname}</h4>
            <h4>Duration: {walkthru.duration} min</h4>
            </div>
            <div className={styles.deleteBtnContainer}>
            <button 
            className={styles.projectCardBtn}
            onClick={() => dispatch(deleteProjectWalkthru(walkthru.id))}
            >Delete
            </button>
            </div>
          </li>)
        })}
      </ul>
        
    </div>
  )
}

export default Projectwalkthru;