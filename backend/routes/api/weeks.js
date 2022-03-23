const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Day, Week, Project, sequelize } = require('../../db/models');

const router = express.Router();

// * means it's been tested and worked properly

const validateWeek = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Title must be between 2 and 30 characters.'),
  handleValidationErrors
];

// get single week with days included *
router.get(
  '/:weekId',
  asyncHandler(async (req, res) => {
    const {weekId} = req.params
    const week = await Week.findByPk(weekId, {
      include: [{model: Day}, {model: Project}],
      order: sequelize.col('id')
    })

    return res.json({
      week
    });
  })
);

// create a week *
router.post(
  '/',
  validateWeek,
  asyncHandler(async (req, res) => {
    const week = await Week.create(req.body)

    res.redirect(`${req.baseUrl}/${week.id}`)
  })
);

// update a week and return that single week *
router.patch(
  '/:weekId',
  validateWeek,
  asyncHandler(async (req, res) => {
    const {weekId} = req.params
    const week = await Week.findByPk(weekId)
    await week.update(req.body)

    res.redirect(`${req.baseUrl}/${weekId}`)
  })
);

// delete a week - return mod with all current weeks *
router.delete(
  '/:weekId',
  asyncHandler(async (req, res) => {
    const {weekId} = req.params
    const week = await Week.findByPk(weekId)
    await week.destroy();

    res.redirect('/api/mods')
  })
);

module.exports = router;