// routes/users.js
const express = require('express');
const router = express.Router();

/**
 * @desc User 목록 표시
 */
router.get('/', (req, res, next) => {
    const query = 'SELECT * FROM users';
    global.db.all(query, [], (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.json(rows); // JSON 형식으로 사용자 목록 반환
        }
    });
});

module.exports = router;
