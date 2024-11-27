const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('staff');
});

router.post('/request', (req, res) => {
    const { table, message } = req.body;
    // Xử lý yêu cầu gọi nhân viên ở đây
    res.send(`Yêu cầu gọi nhân viên cho bàn ${table}: ${message}`);
});

module.exports = router;
