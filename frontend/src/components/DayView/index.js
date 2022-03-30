import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCurrentDay} from '../../store/day';
import ProjectCard from '../ProjectCard';
import ProjectForm from './ProjectForm';

import styles from './dayview.module.css'

const DayView = ({modId, day}) => {
  const [createProject, setCreateProject] = useState(false);
  const dispatch = useDispatch();
  const currentDay = useSelector(state => state.days.currentDay);

  useEffect(() => {
    if (day.id) dispatch(loadCurrentDay(day.id));
  }, [day, dispatch])

  return( currentDay && 
    <div className={styles.dayContainer}>
      <div className={styles.projectCardsContainer}>
      <div className={styles.dayHeader}>
        <button onClick={() => setCreateProject(!createProject)}>{createProject ? 'Cancel' : 'Create Project'}</button>
        {createProject && <ProjectForm setter={setCreateProject} modId={modId} weekId={currentDay.weekId} dayId={currentDay.id} />}
      </div>
        {currentDay.Projects?.map(project => (
          <div key={project.id} className={styles.projectContainer}>
            <ProjectCard project={project}  />
            <div className={styles.clear}></div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default DayView;