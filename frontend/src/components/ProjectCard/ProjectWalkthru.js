import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {createProjectWalkthru, deleteProjectWalkthru} from '../../store/projectwalkthru';


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
    <div>
      <h3>Eod Walkthrough:</h3>
      <ul>
        {walkthrus.map(walkthru => {
          const user = users.find(user => user.id === walkthru.userId);
          return (<li key={walkthru.id}>
            <h4>{user.fname} {user.lname}</h4>
            <h4>Duration: {walkthru.duration} min</h4>
            <button 
            onClick={() => dispatch(deleteProjectWalkthru(walkthru.id))}
            >Delete
            </button>
          </li>)
        })}
      </ul>
      <button onClick={() => setCreateWalkthru(!createWalkthru)}>{createWalkthru ? 'Cancel' : 'Create'}</button>
        {createWalkthru && 
          <form onSubmit={SubmitWalkthru}>
            <select
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
            <input type='number' value={duration} onChange={(e) => setDuration(e.target.value)} />
            <button type='submit'>Create</button>
          </form>
        }
    </div>
  )
}

export default Projectwalkthru;