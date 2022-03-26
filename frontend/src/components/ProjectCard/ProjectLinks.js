import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createProjectLink, deleteProjectLink} from '../../store/projectlink';

const ProjectLinks = ({dayId, projectId, links}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    const projectLink = {
      dayId,
      projectId,
      title,
      url
    }

    console.log(projectLink);
    await(dispatch(createProjectLink(projectLink)))
    .then(() => setTitle(''))
    .then(() => setUrl(''));
  }

  return(
    <div>
      <h3>Helpful Links</h3>
      <form onSubmit={onSubmit}>
      <input 
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        />
      <input 
      type='text' 
      placeholder='Url' 
      value={url} 
      onChange={(e) => setUrl(e.target.value)} 
      />
      <button>Add</button>
      </form>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.url} target='blank'>{link.title}</a>
            <button onClick={() => dispatch(deleteProjectLink(link.id))}>Delete</button>
          </li>
        ))}
      </ul>    
    </div>
  )
}

export default ProjectLinks;