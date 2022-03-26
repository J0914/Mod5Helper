import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateDayProject} from '../../store/day';

import styles from './projectcard.module.css'

const ProjectNotes = ({project}) => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState(project.notes || '');

  const onSubmit = async(e) => {
    e.preventDefault();

    const editItem = {};
    editItem['notes'] = notes
    await dispatch(updateDayProject(project.id, editItem))
  }

  return (
    <div className="project-notes">
      <textarea type='text' value={notes} onChange={(e) => setNotes(e.target.value)} onBlur={onSubmit}/>
    </div>
  )
}

export default ProjectNotes;