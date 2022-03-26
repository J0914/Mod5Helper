const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Project, ProjectLink, ProjectWalkthru, sequelize } = require('../../db/models');

const router = express.Router();

const validateProject = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please include a title!')
    .isLength({min: 2, max: 30})
    .withMessage('Title must be between 2 and 30 characters.'),
  check('starter')
    .optional() // doesn't have to be there, but if it is validate it
    .isURL()
    .withMessage('Please provide a valid url.'),
  check('curriculum')
    .optional()
    .isURL()
    .withMessage('Please provide a valid url.'),
  check('solution')
    .optional()
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];

const validateUpdateProject = [
  check('title')
    .optional()
    .isLength({min: 2, max: 30})
    .withMessage('Title must be between 2 and 30 characters.'),
  check('starter') // 
    .optional({checkFalsy: true}) // doesn't have to be there, but if it is validate it
    .isURL()
    .withMessage('Please provide a valid url.'),
  check('curriculum')
    .optional({checkFalsy: true})
    .isURL()
    .withMessage('Please provide a valid url.'),
  check('solution')
    .optional({checkFalsy: true})
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];

// get single Project with projectlinks and projectwalkthrus included *
router.get(
  '/:projectId',
  asyncHandler(async (req, res) => {
    const {projectId} = req.params
    const project = await Project.findByPk(projectId)

    res.redirect(303, `/api/days/${project.dayId}`)
  })
);

// create a project and return that single project * 
router.post(
  '/',
  validateProject,
  asyncHandler(async (req, res) => {
    const project = await Project.create(req.body)

    res.redirect(`${req.baseUrl}/${project.id}`)
  })
);

// update a project and return that single project
router.patch(
  '/:projectId',
  validateUpdateProject,
  asyncHandler(async (req, res) => {
    const {projectId} = req.params
    const project = await Project.findByPk(projectId)
    await project.update(req.body)

    res.redirect(303, `/api/days/${project.dayId}`)
  })
);

// delete a project - return day with all current projects *
router.delete(
  '/:projectId',
  asyncHandler(async (req, res) => {
    const {projectId} = req.params
    const project = await Project.findByPk(projectId)
    await project.destroy();

    res.redirect(`/api/days/${project.dayId}`)
  })
);

module.exports = router;