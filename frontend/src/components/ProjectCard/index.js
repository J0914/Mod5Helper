import {useState} from 'react';
import EditLinkForm from '../EditLinkForm';
import ProjectNotes from './ProjectNotes';
import ProjectLinks from './ProjectLinks';
import ProjectWalkthru from './ProjectWalkthru';

import styles from './projectcard.module.css'

const ProjectCard = ({project}) => {
  const [editStarter, setEditStarter] = useState(false);
  const [editCurriculum, setEditCurriculum] = useState(false);
  const [editSolution, setEditSolution] = useState(false);

  console.log(project)

  return ( project &&
    <div className={styles.projectCard}>
      <div className={styles.projectCardHeader}>
        <h2 className={styles.projectCardTitle}>{project.title}</h2>
      </div>
      <div className={styles.projectCardBody}>
        <div className={styles.linkDiv}>
          {!editStarter ? 
            <h3>{project.starter ? <a target='blank' href={project.starter}>Starter Repo</a> 
            : 'no starter link!'}
            </h3>
          : 
            <EditLinkForm setter={setEditStarter} item={project} link={project.starter} column='starter' />
          }
          <button onClick={() => setEditStarter(!editStarter)} className={styles.editLinkButton}>{editStarter ? 'Cancel' : 'Edit'}</button>
        </div>
        <div className={styles.linkDiv}>
        {!editCurriculum ?
          <h3>{project.curriculum ? <a target='blank' href={project.curriculum}>Curriculum Repo</a> 
          : 'no curriculum link!'}
          </h3>
        :
          <EditLinkForm setter={setEditCurriculum} item={project} link={project.curriculum} column='curriculum' />
        }
        <button onClick={() => setEditCurriculum(!editCurriculum)} className={styles.editLinkButton}>{editCurriculum ? 'Cancel' : 'Edit'}</button>
        </div>
        <div className={styles.linkDiv}>
        {!editSolution ?
          <h3>{project.solution ? <a target='blank' href={project.solution}>Solution Repo</a>
          : 'no solution link!'}
          </h3>
        :
          <EditLinkForm setter={setEditSolution} item={project} link={project.solution} column='solution' />
        }
        <button onClick={() => setEditSolution(!editSolution)} className={styles.editLinkButton}>{editSolution ? 'Cancel' : 'Edit'}</button>
        </div>
        <div className={styles.projectNotes}>
            <ProjectNotes project={project} />
        </div>
        <ProjectLinks dayId={project.dayId} projectId={project.id} links={project.ProjectLinks} />
        {project.ProjectWalkthrus.length > 0 ? 
        <ProjectWalkthru walkthrus={project.ProjectWalkthrus} />
        :
        <h3>No Walkthrus</h3>
      }
      </div>
    </div>   
  )
}

export default ProjectCard;