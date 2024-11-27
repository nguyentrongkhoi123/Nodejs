const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('review');
});

router.post('/submit', (req, res) => {
    const { name, rating, comment } = req.body;
    // Xử lý đánh giá ở đây
    res.send(
        `Cảm ơn ${name}, bạn đã đánh giá ${rating} sao. Nhận xét: ${comment}`,
    );
});

module.exports = router;
