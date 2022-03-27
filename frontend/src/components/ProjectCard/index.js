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
        <div className={styles.linksContainer}>
          <div className={styles.linkDiv}>
              <h3>{project.starter ? 
              <a target='blank' href={project.starter}>Starter</a> 
              : 'no starter link!'}
              </h3>
            <button onClick={() => {
              setEditStarter(!editStarter)
              setEditCurriculum(false)
              setEditSolution(false)
              }} 
              className={styles.projectCardBtn}
              >{editStarter ? 'Cancel' : 'Edit'}
              </button>
          </div> 
          <div className={styles.linkDiv}>

            <h3>{project.curriculum ? 
            <a target='blank' href={project.curriculum}>Curriculum</a> 
            : 'no curriculum link!'}
            </h3>

          <button 
            onClick={() => {
              setEditStarter(false)
              setEditCurriculum(!editCurriculum)
              setEditSolution(false)
              
            }} 
            className={styles.projectCardBtn}
            >{editCurriculum ? 'Cancel' : 'Edit'}
            </button>
          </div>
          <div className={styles.linkDiv}>

            <h3>{project.solution ? 
            <a target='blank' href={project.solution}>Solution</a>
            : 'no solution link!'}
            </h3>

          <button 
            onClick={() => {
              setEditStarter(false)
              setEditCurriculum(false)
              setEditSolution(!editSolution)
            }} 
            className={styles.projectCardBtn}
            >{editSolution ? 'Cancel' : 'Edit'}
            </button>
          </div>
        </div>
        {editStarter && !editCurriculum && !editSolution &&
          <div className={styles.editLinkFormContainer}>
            <EditLinkForm setter={setEditStarter} item={project} link={project.starter} column='starter' />
          </div>
        }
        {editCurriculum && !editStarter && !editSolution &&
          <div className={styles.editLinkFormContainer}>
            <EditLinkForm setter={setEditCurriculum} item={project} link={project.curriculum} column='curriculum' />
          </div>
        }
        {editSolution && !editStarter && !editCurriculum &&
          <div className={styles.editLinkFormContainer}>
            <EditLinkForm setter={setEditSolution} item={project} link={project.solution} column='solution' />
          </div>
        }
        <div className={styles.walkthruAndNotesContainer}>
          <ProjectWalkthru projectId={project.id} walkthrus={project.ProjectWalkthrus} />
          <div className={styles.projectNotes}>
              <ProjectNotes project={project} />
          </div>
        </div>
        <ProjectLinks dayId={project.dayId} projectId={project.id} links={project.ProjectLinks} />
      </div>
    </div>   
  )
}

export default ProjectCard;