import {useState} from 'react';
import EditLinkForm from '../EditLinkForm';

import styles from './projectcard.module.css'

const ProjectCard = ({project}) => {
  const [editStarter, setEditStarter] = useState(false);
  const [editCurriculum, setEditCurriculum] = useState(false);
  const [editSolution, setEditSolution] = useState(false);

  return ( project &&
    <div className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <h2 className={styles.projectCardTitle}>{project.title}</h2>
      </div>
      <div className={styles.projectCardBody}>
        <div className={styles.linkDiv}>
          {!editStarter ? 
            <h3>{project.starter ? <a href={project.starter}>Starter Repo</a> 
            : 'no starter link!'}
            </h3>
          : 
            <EditLinkForm link={project.starter} column='starter' />
          }
          <button onClick={() => setEditStarter(!editStarter)} className={styles.editLinkButton}>{editStarter ? 'Cancel' : 'Edit'}</button>
        </div>
        <div className={styles.linkDiv}>
        {!editCurriculum ?
          <h3>{project.curriculum ? <a href={project.curriculum}>Curriculum Repo</a> 
          : 'no curriculum link!'}
          </h3>
        :
          <EditLinkForm link={project.curriculum} column='curriculum' />
        }
        <button onClick={() => setEditCurriculum(!editCurriculum)} className={styles.editLinkButton}>{editCurriculum ? 'Cancel' : 'Edit'}</button>
        </div>
        <div className={styles.linkDiv}>
        {!editSolution ?
          <h3>{project.solution ? <a href={project.solution}>Solution Repo</a>
          : 'no solution link!'}
          </h3>
        :
          <EditLinkForm link={project.solution} column='solution' />
        }
        <button onClick={() => setEditSolution(!editSolution)} className={styles.editLinkButton}>{editSolution ? 'Cancel' : 'Edit'}</button>
        </div>
        <h3>Notes: {project.notes ? project.notes : 'no notes!'}</h3>
        <h3>project links</h3>
        <h3>project walkthru</h3>
      </div>
    </div>   
  )
}

export default ProjectCard;