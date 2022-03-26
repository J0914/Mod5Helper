import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCurrentDay} from '../../store/day';
import ProjectCard from '../ProjectCard';

import styles from './dayview.module.css'

const DayView = ({day}) => {
  const dispatch = useDispatch();
  const currentDay = useSelector(state => state.days.currentDay);

  useEffect(() => {
    if (day.id) dispatch(loadCurrentDay(day.id));
  }, [day, dispatch])

  return( currentDay && 
    <div className={styles.dayContainer}>
      <h2 className={styles.dayH2}>{currentDay.title}</h2>
      <div className={styles.projectCardsContainer}>
        {currentDay.Projects?.map(project => (
          <div key={project.id} className={styles.projectContainer}>
            <ProjectCard project={project}  />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DayView;