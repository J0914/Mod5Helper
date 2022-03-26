import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {loadCurrentMod} from '../../store/mod';
import {useDispatch} from 'react-redux';
import {NavLink, Route} from 'react-router-dom'
import WeekView from '../WeekView';

import styles from './dashboard.module.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const mod = useSelector(state => state.mods.currentMod);
  const [currentWeek, setCurrentWeek] = useState({})

  useEffect(() => {
    if (user) dispatch(loadCurrentMod(user.modId));
  }, [user, dispatch])

  useEffect(() => {
    if (mod.Weeks) setCurrentWeek(mod.Weeks[0])
  }, [mod])
  

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.welcomeH2}>Welcome to Mod Helper</h2>
      </div>
    <div className={styles.weeksContainer}>
      {mod?.Weeks?.map(week => (
        <div key={week.id} className={styles.weekContainer}>
          <NavLink to={`/dashboard/${week.id}`} onClick={() => setCurrentWeek(week)} className={styles.weekH3}>{week.title}</NavLink>
        </div>
      ))}
      </div>
      <Route path='/dashboard/:weekId' >
      <WeekView week={currentWeek} />
      </Route>
    </div>
  )
}

export default Dashboard;