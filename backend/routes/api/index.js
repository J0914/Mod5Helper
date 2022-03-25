const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const modsRouter = require('./mods.js')
const weeksRouter = require('./weeks.js')
const daysRouter = require('./days.js')
const daylinksRouter = require('./daylinks.js')
const projectsRouter = require('./projects.js')
const projectlinksRouter = require('./projectlinks.js')
const projectwalkthrusRouter = require('./projectwalkthrus.js')
const meetingsRouter = require('./meetings.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/mods', modsRouter)
router.use('/weeks', weeksRouter)
router.use('/days', daysRouter)
router.use('/daylinks', daylinksRouter)
router.use('/projects', projectsRouter)
router.use('/projectlinks', projectlinksRouter)
router.use('/projectwalkthrus', projectwalkthrusRouter)
router.use('/meetings', meetingsRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;