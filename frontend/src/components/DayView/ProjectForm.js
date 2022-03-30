import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createProject} from '../../store/project';

const ProjectForm = ({setter, modId, weekId, dayId}) => {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = async(e) => {
    e.preventDefault();
    setErrors([]);

    if (!title) {
      setErrors(['Please enter a title.'])
    }
    else {
      setErrors([]);
      const newProject = {
        title,
        weekId,
        dayId,
        modId
      }
      await dispatch(createProject(newProject));
      setTitle('');
      setter(false);
    }
  }

  return(
    <div className="project-form">
      <form onSubmit={onSubmit}>
        {errors.map(error => (
          <p key={error}>{error}</p>
        ))}
        <div className="form-group">
          <label htmlFor="project-title">Project Title</label>
          <input  value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="projectTitle" id="project-title" placeholder="Project Title" />
        </div>
      </form>
    </div>
      
  )
}

export default ProjectForm;