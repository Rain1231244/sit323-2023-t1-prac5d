let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let ip = '0.0.0.0';
let port = '30600';

// use router
app.use('/', router);

// set router
// index page
router.get('/', (req, res) => {
    res.send(
        '<h3>MS1 say hello to you! From: ' + ip + ':' + port + '</h3>' +
        '<ul>' +
        '<li><a href="https://www.baidu.cn">baidu search in this page</a></li>' +
        '<li><a href="http://localhost:30700/sub/?n1=10&n2=30">MS2: add 10 and 30</a></li>' +
        '</ul>'
    );
})
// add
router.get('/add', (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = n1 + n2;
        res.status(200);
        res.send('<h2>' + n1 + ' + ' + n2 + ' = ' + result + '</h2>');
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
})

// start server
app.listen(port, ip, () => {
    console.log('MS1 Server start on http://' + ip + ':' + port);
})