import { useEffect } from "react";
import {useSelector} from 'react-redux';


const Projectwalkthru = ({walkthrus}) => {

  const users = useSelector(state => state.session.modUsers);
  

  return(
    <div>
      <h3>Eod Walkthrough:</h3>
      <ul>
        {walkthrus.map(walkthru => {
          const user = users.find(user => user.id === walkthru.userId);
          return (<li key={walkthru.id}>
            <h4>{user.fname} {user.lname}</h4>
            <h4>Duration: {walkthru.duration} min</h4>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Projectwalkthru;