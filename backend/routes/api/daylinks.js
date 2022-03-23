const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Day, Project, DayLink, sequelize } = require('../../db/models');

const router = express.Router();

const validateDayLink = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Title must be between 2 and 30 characters.'),
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid url.')
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];
const validateUpdateDayLink = [
  check('title')
    .optional()
    .isLength({min: 2, max: 30})
    .withMessage('Title must be between 2 and 30 characters.'),
  check('url')
    .optional()
    .isURL()
    .withMessage('Please provide a valid url.'),
  handleValidationErrors
];

// create a daylink and return current day with updated links* 
router.post(
  '/',
  validateDayLink,
  asyncHandler(async (req, res) => {
    const daylink = await DayLink.create(req.body)

    res.redirect(`/api/days/${daylink.dayId}`)
  })
);

// update a daylink and return that single day with updated links *
router.patch(
  '/:daylinkId',
  validateUpdateDayLink,
  asyncHandler(async (req, res) => {
    const {daylinkId} = req.params
    const daylink = await DayLink.findByPk(daylinkId)
    await daylink.update(req.body)

    res.redirect(`/api/days/${daylink.dayId}`)
  })
);

// delete a daylink - return day with all current daylinks *
router.delete(
  '/:daylinkId',
  asyncHandler(async (req, res) => {
    const {daylinkId} = req.params
    const daylink = await DayLink.findByPk(daylinkId)
    await daylink.destroy();

    res.redirect(`/api/days/${daylink.dayId}`)
  })
);

module.exports = router;