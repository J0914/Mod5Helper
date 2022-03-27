import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createProjectLink, deleteProjectLink} from '../../store/projectlink';

import styles from './projectcard.module.css';

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
    <div className={styles.projectLinksContainer}>
      <h3 className={styles.linksHeader}>Helpful Links</h3>
      <form className={styles.linksForm} onSubmit={onSubmit}>
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
      <button
      className={styles.projectCardBtn}
      >Add</button>
      </form>
      <ul className={styles.linksUl}>
        {links.map(link => (
          <li key={link.id} className={styles.linkLi}>
            <a rel={link.title} href={link.url} target='blank'>{link.title.slice(0, 15)} {link.title.length > 15 ? '...' : ''}</a>
            <button 
            className={styles.projectCardBtn}
            onClick={() => dispatch(deleteProjectLink(link.id))}
            >Delete
            </button>
          </li>
        ))}
      </ul>    
    </div>
  )
}

export default ProjectLinks;