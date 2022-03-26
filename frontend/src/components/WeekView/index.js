import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Route, useHistory} from 'react-router-dom'
import DayView from '../DayView';
import {loadCurrentWeek} from '../../store/week';

import styles from './weekview.module.css'

const WeekView = ({week}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentWeek = useSelector(state => state.weeks.currentWeek);
  const [currentDay, setCurrentDay] = useState({})

  useEffect(() => {
    if (week.id) dispatch(loadCurrentWeek(week.id));
  }, [dispatch, week])

  useEffect(() => {
    if (currentWeek?.Days) {
      setCurrentDay(currentWeek.Days[0])
      history.push(`/dashboard/${currentWeek.id}/days/${currentWeek.Days[0].id}`)
    }
  }, [currentWeek])
  

  return (
    <div>
      <div className={styles.daysContainer}>
        {currentWeek?.Days?.map(day => (
          <div key={day.id} className={styles.dayContainer}>
            <NavLink to={`/dashboard/${currentWeek.id}/days/${day.id}`} onClick={() => setCurrentDay(day)} className={styles.weekH3}>{day.title}</NavLink>
          </div>
        ))}
      </div>
      <Route path='/dashboard/:weekId/days/:dayId' >
        <DayView day={currentDay} />
      </Route>
    </div>
  );
}

export default WeekView;