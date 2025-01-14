// organiser 라우트를 /organiser 경로에 연결
const expressOrganiser = require("express");
const organiserRouter = expressOrganiser.Router();

/**
 * @desc Organiser Home Page 렌더링
 */
organiserRouter.get("/", (req, res, next) => {
    const queryPublished = "SELECT * FROM events WHERE state = 'published' ORDER BY published_at DESC";
    const queryDraft = "SELECT * FROM events WHERE state = 'draft' ORDER BY created_at DESC";
    global.db.all(queryPublished, [], (err, publishedEvents) => {
        if (err) return next(err);
        global.db.all(queryDraft, [], (err, draftEvents) => {
            if (err) return next(err);
            res.render("organiser_home", {
                managerName: "Stretch Yoga",
                managerDescription: "Yoga classes for all ages and abilities",
                publishedEvents,
                draftEvents,
            });
        });
    });
});

/**
 * @desc 이벤트 게시
 */
organiserRouter.post("/publish/:id", (req, res, next) => {
    const query = "UPDATE events SET state = 'published', published_at = CURRENT_TIMESTAMP WHERE id = ?";
    global.db.run(query, [req.params.id], (err) => {
        if (err) return next(err);
        res.redirect("/organiser");
    });
});

/**
 * @desc 이벤트 편집 페이지
 */
organiserRouter.get("/edit/:id", (req, res, next) => {
    const query = "SELECT * FROM events WHERE id = ?";
    global.db.get(query, [req.params.id], (err, event) => {
        if (err) return next(err);
        res.render("organiser_edit_event", { event });
    });
});

organiserRouter.post("/edit/:id", (req, res, next) => {
    const query = `
        UPDATE events
        SET title = ?, description = ?, full_price_tickets = ?, concession_tickets = ?, last_modified = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    const params = [
        req.body.title,
        req.body.description,
        req.body.full_price_tickets,
        req.body.concession_tickets,
        req.params.id
    ];

    global.db.run(query, params, (err) => {
        if (err) return next(err);
        res.redirect("/organiser");
    });
});

/**
 * @desc 주최자의 이벤트 목록 표시
 */
organiserRouter.get("/events", (req, res, next) => {
    const query = "SELECT * FROM events";
    global.db.all(query, (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.json(rows);
        }
    });
});

/**
 * @desc 새로운 Draft Event 추가
 */
organiserRouter.post("/add-event", (req, res, next) => {
    const query = `
        INSERT INTO events (title, description, state, full_price_tickets, concession_tickets) 
        VALUES (?, ?, 'draft', 0, 0)
    `;
    const params = [req.body.title, req.body.description];
    global.db.run(query, params, function (err) {
        if (err) {
            return next(err);
        }
        // 추가 후 Organiser Home으로 리다이렉트
        res.redirect("/organiser");
    });
});

/**
 * @desc 이벤트 삭제
 */
organiserRouter.post("/delete-event/:id", (req, res, next) => {
    const query = "DELETE FROM events WHERE id = ?";
    const params = [req.params.id];
    global.db.run(query, params, function (err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/organiser");
        }
    });
});

/**
 * @desc Site Settings 페이지
 */
organiserRouter.get("/settings", (req, res, next) => {
    global.db.get("SELECT manager_name, manager_description FROM site_settings", [], (err, settings) => {
        if (err) return next(err);
        res.render("site_settings", {
            managerName: settings?.manager_name || "Default Name",
            managerDescription: settings?.manager_description || "Default Description",
        });
    });
});

organiserRouter.post("/settings", (req, res, next) => {
    const query = "UPDATE site_settings SET manager_name = ?, manager_description = ?";
    const params = [req.body.manager_name, req.body.manager_description];
    global.db.run(query, params, (err) => {
        if (err) return next(err);
        res.redirect("/organiser");
    });
});
module.exports = organiserRouter;
