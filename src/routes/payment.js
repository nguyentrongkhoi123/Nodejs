const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('payment');
});

router.post('/submit', (req, res) => {
    const { name, total } = req.body;
    // Xử lý thanh toán ở đây
    res.send(`Cảm ơn ${name}, bạn đã thanh toán ${total} VNĐ.`);
});

module.exports = router;
