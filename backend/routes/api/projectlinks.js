const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Project, ProjectLink, ProjectWalkthru, sequelize } = require('../../db/models');

const router = express.Router();

const validateProjectLink = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please include a title!')
    .isLength({min: 2, max: 30})
    .withMessage('Title must be between 2 and 30 characters.'),
  check('url')
    .exists({checkFalsy: true}) // doesn't have to be there, but if it is validate it
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];
const validateUpdateProjectLink = [
  check('title')
    .optional()
    .isLength({min: 2, max: 30})
    .withMessage('Title must be between 2 and 30 characters.'),
  check('url')
    .optional() // doesn't have to be there, but if it is validate it
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];

// refactor to be in the validations at some point, just dont 
// want to have to include a projectId with updates - that's 
// the only reason this is not a custom validation at this moment.
const checkIfExists = async(projectlink, req, next) => {
  const links = await ProjectLink.findAll({
    where: {projectId: projectlink.projectId}
  })
  const exists = links.filter(link => link.url === req.body.url)
  if (exists.length > 0) return true;
  else return false;
}


// create a projectlink and return that single project with updated list* 
router.post(
  '/',
  validateProjectLink,
  asyncHandler(async (req, res, next) => {
    const exists = await checkIfExists({projectId: req.body.projectId}, req)
    
    if (!exists) {
      const projectlink = await ProjectLink.create(req.body)
      res.redirect(`/api/projects/${projectlink.projectId}`)
    } else {
      const err = new Error('That url already exists on this project');
      err.status = 404;
      err.title = 'Duplicate Url';
      err.errors = ['That url already exists on this project'];
      return next(err);
    }
  })
);

// update a projectlink and return that single project with updated list *
router.patch(
  '/:linkId',
  validateUpdateProjectLink,
  asyncHandler(async (req, res, next) => {
    const {linkId} = req.params

    const projectlink = await ProjectLink.findByPk(linkId)
    const exists = await checkIfExists(projectlink, req)

    if (!exists) {
      await projectlink.update(req.body)
      res.redirect(`/api/projects/${projectlink.projectId}`)
    } else {
      const err = new Error('That url already exists on this project');
      err.status = 404;
      err.title = 'Duplicate Url';
      err.errors = ['That url already exists on this project'];
      return next(err);
    }
  })
);


////////////////START HERE///////////NOT WORKING//////////
// delete a projectlink - return project with all current projectlinks *
// router.delete(
//   '/:linkId',
//   asyncHandler(async (req, res) => {
//     const {linkId} = req.params
//     const projectlink = await ProjectLink.findByPk(linkId)
//     await projectlink.destroy();

//     res.redirect(`/api/projects/${projectlink.projectId}`)
//   })
// );

module.exports = router;
