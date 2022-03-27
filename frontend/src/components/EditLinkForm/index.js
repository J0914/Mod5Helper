import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateDayProject} from '../../store/day';

import styles from './editlinkform.module.css'

const EditLinkForm = ({setter, item, link, column}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(link || '');

  const onSubmit = async(e) => {
    e.preventDefault();
    const editItem = {};
    editItem[column] = value;
    await dispatch(updateDayProject(item.id, editItem))
    .then(() => setter(false));
  }

  return (
      <div className={styles.inputContainer}>
        <label htmlFor="link">{column.charAt(0).toUpperCase() + column.slice(1)}</label>
        <input type="text" className={styles.editInput} id="link" placeholder={`Enter ${column} link`} value={value} onChange={(e) => setValue(e.target.value)} onBlur={onSubmit} />
      </div>
  )
}

export default EditLinkForm;