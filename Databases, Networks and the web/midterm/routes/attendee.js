// Attendee 라우트를 정의합니다.
const express = require("express");
const router = express.Router();

/**
 * @desc Attendee Home Page
 */
router.get("/", (req, res, next) => {
    const query = "SELECT * FROM events WHERE state = 'published' ORDER BY published_at DESC";
    global.db.all(query, [], (err, events) => {
        if (err) return next(err);
        res.render("attendee_home", {
            managerName: "Stretch Yoga",
            managerDescription: "Yoga classes for all ages and abilities",
            events,
        });
    });
});

/**
 * @desc Attendee Event Page (등록된 사용자 목록 포함)
 */
router.get("/:id", (req, res, next) => {
    const eventQuery = "SELECT * FROM events WHERE id = ?";
    const bookingsQuery = "SELECT name, full_price_tickets, concession_tickets FROM bookings WHERE event_id = ?";

    global.db.get(eventQuery, [req.params.id], (err, event) => {
        if (err) return next(err);
        if (!event) return res.status(404).send("Event not found");

        global.db.all(bookingsQuery, [req.params.id], (err, bookings) => {
            if (err) return next(err);

            res.render("attendee_event", {
                event,
                bookings
            });
        });
    });
});

/**
 * @desc 이벤트 예약 처리
 */
router.post("/book/:id", (req, res, next) => {
    const { user_name, full_price_tickets, concession_tickets } = req.body;

    // 데이터 검증
    if (!user_name || full_price_tickets < 0 || concession_tickets < 0) {
        return res.status(400).send("Invalid input");
    }

    const query = `
        INSERT INTO bookings (event_id, name, full_price_tickets, concession_tickets)
        VALUES (?, ?, ?, ?)
    `;
    const params = [
        req.params.id,
        user_name,
        parseInt(full_price_tickets, 10) || 0,
        parseInt(concession_tickets, 10) || 0,
    ];

    global.db.run(query, params, function (err) {
        if (err) return next(err);
        res.redirect(`/attendee/${req.params.id}`);
    });
});

module.exports = router;
