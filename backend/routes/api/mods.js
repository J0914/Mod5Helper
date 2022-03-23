const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Mod, Week, Project, sequelize } = require('../../db/models');

const router = express.Router();

const validateMod = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Title must be between 2 and 30 characters.'),
  handleValidationErrors
];

// get all mods with weeks included *
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const mods = await Mod.findAll({
      include: [{model: Week}, {model: Project}],
      order: sequelize.col('id')
    })

    return res.json({
      mods
    });
  })
);

// get single mod with weeks included *
router.get(
  '/:modId',
  asyncHandler(async (req, res) => {
    const {modId} = req.params
    const mod = await Mod.findByPk(modId, {
      include: [{model: Week}, {model: Project}],
      order: sequelize.col('id')
    })

    return res.json({
      mod
    });
  })
);

// create a mod *
router.post(
  '/',
  validateMod,
  asyncHandler(async (req, res) => {
    const mod = await Mod.create(req.body)

    res.redirect(`${req.baseUrl}/${mod.id}`)
  })
);

// update a mod and return that single mod *
router.patch(
  '/:modId',
  asyncHandler(async (req, res) => {
    const {modId} = req.params
    const mod = await Mod.findByPk(modId)
    await mod.update(req.body)

    res.redirect(`${req.baseUrl}/${modId}`)
  })
);

// delete a mod - return all current mods *
router.delete(
  '/:modId',
  asyncHandler(async (req, res) => {
    const {modId} = req.params
    const mod = await Mod.findByPk(modId)
    await mod.destroy()

    res.redirect(`${req.baseUrl}`)
  })
);

module.exports = router;