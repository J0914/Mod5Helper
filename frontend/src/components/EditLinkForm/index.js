import {useState} from 'react';

import styles from './editlinkform.module.css'

const EditLinkForm = ({link, column}) => {
  const [value, setValue] = useState(link);

  const onSubmit = (e) => {
    e.preventDefault();
    const Project = {};
    Project[column] = value;
    console.log(Project);
  }

  console.log(value)

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input type="text" className="form-control" id="link" placeholder={`Enter ${column} link`} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default EditLinkForm;