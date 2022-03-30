import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {loadCurrentMod} from '../../store/mod';
import {getAllModUsers} from '../../store/session';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import WeekView from '../WeekView';

import styles from './dashboard.module.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const mod = useSelector(state => state.mods.currentMod);
  const [currentWeek, setCurrentWeek] = useState({})

  useEffect(() => {
    if (user) {
      dispatch(loadCurrentMod(user.modId))
      .then(() => dispatch(getAllModUsers(user.modId)));
    }
  }, [user, dispatch])

  useEffect(() => {
    if (mod.Weeks) setCurrentWeek(mod.Weeks[0])
  }, [mod])
  
  useEffect(() => {
    console.log('currentWeek', currentWeek)
      // history.push(`/dashboard/${currentWeek.id}`)
  }, [currentWeek, history])

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.welcomeH2}>Welcome to Mod Helper</h2>
      </div>
    <div className={styles.weeksContainer}>
      {/* {mod?.Weeks?.map(week => (
        <div key={week.id} className={styles.weekContainer}>
          <NavLink to={`/dashboard/${week.id}`} onClick={() => setCurrentWeek(week)} className={styles.weekH3}>{week.title}</NavLink>
        </div>
      ))} */}
      <select
      value={currentWeek?.id}
      onChange={(e) => setCurrentWeek(mod.Weeks.find(week => week.id === +e.target.value))}
      >
        {mod?.Weeks?.map(week => (
          <option key={week.id} value={week.id} >{week.title}</option>
        ))}
      </select>
      </div>
      <WeekView week={currentWeek} />
    </div>
  )
}

export default Dashboard;