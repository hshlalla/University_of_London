/**
 * db_schema.sql
 */
-- 유저 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 이벤트 테이블 생성
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    state TEXT CHECK(state IN ('draft', 'published')) DEFAULT 'draft',
    full_price_tickets INTEGER DEFAULT 0,
    concession_tickets INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    published_at DATETIME,
    last_modified DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    full_price_tickets INTEGER NOT NULL DEFAULT 0,
    concession_tickets INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE CASCADE
);



-- 사이트 설정 테이블 생성
CREATE TABLE IF NOT EXISTS site_settings (
    manager_name TEXT,
    manager_description TEXT
);

-- 초기 데이터 삽입
INSERT OR IGNORE INTO site_settings (manager_name, manager_description) VALUES ('Stretch Yoga', 'Yoga classes for all ages and abilities');

-- 더미 데이터 삽입 (선택 사항)
INSERT INTO users (user_name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (user_name, email) VALUES ('Bob', 'bob@example.com');

INSERT INTO events (title, description, state, full_price_tickets, concession_tickets, created_at, published_at)
VALUES 
('Yoga Session', 'Morning yoga for beginners', 'published', 10, 5, DATETIME('now', '-7 days'), DATETIME('now', '-6 days')),
('Art Workshop', 'Learn to paint landscapes', 'draft', 15, 7, DATETIME('now', '-3 days'), NULL);