const express = require('express');
const menuRouter = require('./menu');
const staffRouter = require('./staff');
const reviewRouter = require('./review');
const paymentRouter = require('./payment');

const router = express.Router();

router.use('/menu', menuRouter);
router.use('/staff', staffRouter);
router.use('/review', reviewRouter);
router.use('/payment', paymentRouter);

module.exports = router;
