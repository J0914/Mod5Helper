const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Meeting, sequelize } = require('../../db/models');

const router = express.Router();

const validateMeeting = [
  check('date')
    .exists({ checkFalsy: true })
    .withMessage('Please select a date!'),    
  handleValidationErrors
];

// get all meetings a user is a part of
router.get(
  '/users/:userId',
  asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const meetings = await Meeting.findAll({
      where: {userId}
    })

    return res.json({
      meetings
    });
  })
);

// get single meeting for this user
router.get(
  '/:meetingId',
  asyncHandler(async (req, res) => {
    const {meetingId} = req.params
    const meeting = await Meeting.findByPk(meetingId)
    const date = new Date();
    return res.json({
      meeting, date
    });
  })
);

// create a meeting and return that single meeting * 
router.post(
  '/',
  validateMeeting,
  asyncHandler(async (req, res) => {
    const meeting = await Meeting.create(req.body)

    res.redirect(`${req.baseUrl}/${meeting.id}`)
  })
);

// delete a meeting - return all current user meetings *
router.delete(
  '/:meetingId',
  asyncHandler(async (req, res) => {
    const {meetingId} = req.params
    const meeting = await Meeting.findByPk(meetingId)
    await meeting.destroy();

    res.redirect(`/api/days/${project.dayId}`)
  })
);

module.exports = router;