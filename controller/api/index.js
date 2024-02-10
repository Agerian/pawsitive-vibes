<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const userRouter = require('./userRoutes');


router.use('/users', userRouter);

=======
const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/', userRoutes);
>>>>>>> origin

module.exports = router;