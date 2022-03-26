const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Day, Project, DayLink, ProjectLink, ProjectWalkthru, sequelize } = require('../../db/models');

const router = express.Router();

const validateDay = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Title must be between 2 and 30 characters.'),
  handleValidationErrors
];

// get single Day with projects and daylinks included *
router.get(
  '/:dayId',
  asyncHandler(async (req, res) => {
    const {dayId} = req.params
    const day = await Day.findByPk(dayId, {
      include: [
        { 
          model: Project,
          include: [{ model: ProjectLink }, { model: ProjectWalkthru }]
        }, 
        { model: DayLink }],
      order: sequelize.col('id')
    })

    return res.json({
      day
    });
  })
);

// create a day * 
router.post(
  '/',
  validateDay,
  asyncHandler(async (req, res) => {
    const day = await Day.create(req.body)

    res.redirect(`${req.baseUrl}/${day.id}`)
  })
);

// update a day and return that single day *
router.patch(
  '/:dayId',
  validateDay,
  asyncHandler(async (req, res) => {
    const {dayId} = req.params
    const day = await Day.findByPk(dayId)
    await day.update(req.body)

    res.redirect(`${req.baseUrl}/${dayId}`)
  })
);

// delete a day - return week with all current days *
router.delete(
  '/:dayId',
  asyncHandler(async (req, res) => {
    const {dayId} = req.params
    const day = await Day.findByPk(dayId)
    await day.destroy();

    res.redirect(`/api/weeks/${day.weekId}`)
  })
);

module.exports = router;