const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Project, ProjectLink, ProjectWalkthru, sequelize } = require('../../db/models');

const router = express.Router();

const validateProjectWalkthru = [
  check('duration')
    .exists({ checkFalsy: true })
    .withMessage('Please give an estimated amount of time!'),
  check('userId')
    .custom((userId, { req }) => {
      return ProjectWalkthru.findOne({
        where: {
          userId,
          projectId: req.body.projectId
        }
      })
        .then(walkthru => {
          if (walkthru) {
            return Promise.reject('This person already has a walkthru for this project!');
          }
        })
    }),
  handleValidationErrors
];

const validateUpdateProjectWalkthru = [
  check('duration')
    .optional()
    .isInt({ min: 1, max: 60 })
    .withMessage('Duration should be an integer between 1 and 60!'),
  check('userId')
    .optional()
    .custom((userId, { req }) => {
      return ProjectWalkthru.findOne({
        where: {
          userId,
          projectId: req.body.projectId
        }
      })
        .then(walkthru => {
          if (walkthru) {
            return Promise.reject('This person already has a walkthru for this project!');
          }
        })
    }),
  handleValidationErrors
];

// create new project walkthru and return project with updated walkthrus
router.post(
  '/',
  validateProjectWalkthru,
  asyncHandler(async (req, res, next) => {

    const projectwalkthru = await ProjectWalkthru.create(req.body)

    res.redirect(303, `/api/projects/${projectwalkthru.projectId}`)
  })
);

// update a project walkthru and return project with updated walkthrus
router.patch(
  '/:walkthruId',
  validateUpdateProjectWalkthru,
  asyncHandler(async (req, res) => {
    const {walkthruId} = req.params
    const walkthru = await ProjectWalkthru.findByPk(walkthruId)
    await walkthru.update(req.body)

    res.redirect(303, `/api/projects/${walkthru.projectId}`)
  })
);

router.delete(
  '/:walkthruId',
  asyncHandler(async (req, res) => {
    const {walkthruId} = req.params
    const walkthru = await ProjectWalkthru.findByPk(walkthruId)
    await walkthru.destroy();

    res.redirect(303, `/api/projects/${walkthru.projectId}`)
  })
);

module.exports = router;