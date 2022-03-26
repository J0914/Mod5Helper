// const LOAD = 'project/LOAD';
// const UPDATE = 'project/UPDATE';

// // const loadProjects = (project) => ({
// //   type: LOAD,
// //   project
// // })

// const updateProject = (project) => ({
//   type: UPDATE,
//   project
// })

// export const updateCurrentProject = (projectId, project) => async (dispatch) => {
//   const response = await fetch(`/api/projects/${projectId}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(project)
//   });
//   const data = await response.json();
//   dispatch(updateProject(data.project));
// }

// const projectReducer = () => {
//   return (state = {}, action) => {
//     let newState;
//     switch (action.type) {
//       case LOAD:
//         newState = { ...state };
//         newState.projects.forEach(project => {
//           newState[project.id] = project;
//         })
//         return newState;
//       default:
//         return state;
//     }
//   }
// }

// export default projectReducer;
