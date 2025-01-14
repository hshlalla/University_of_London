/**
 * index.js
 * 메인 애플리케이션 진입점 (이벤트 편집 기능 추가 포함)
 */

// express, bodyparser, EJS 설정
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // ejs를 렌더링 엔진으로 설정
app.use(express.static(__dirname + '/public')); // 정적 파일의 위치 설정

// SQLite 설정
// 글로벌 네임스페이스에 항목 추가 (애플리케이션 전역에서 접근 가능)
const sqlite3 = require('sqlite3').verbose();
console.log("애플리케이션 초기화 시작");

global.db = new sqlite3.Database('./database.db', function (err) {
    if (err) {
        console.error("데이터베이스 연결 실패:", err);
        process.exit(1); // 연결 실패 시 종료
    } else {
        console.log("데이터베이스 연결됨");
        global.db.run("PRAGMA foreign_keys=ON");
    }
});

app.listen(port, () => {
    console.log(`예제 앱이 포트 ${port}에서 실행 중입니다. http://localhost:${port}`);
});

// 홈 페이지 요청 처리
app.get('/', (req, res) => {
    global.db.get('SELECT user_name FROM users WHERE id = ?', [1], (err, row) => {
        if (err) {
            res.status(500).send('데이터베이스 오류');
        } else {
            res.render('home', { username: row ? row.user_name : 'Guest' });
        }
    });
});

// 사용자 정의 라우트 연결
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);


const organiserRoutes = require('./routes/organiser');
app.use('/organiser', organiserRoutes);

const attendeeRoutes = require('./routes/attendee');
app.use('/attendee', attendeeRoutes);