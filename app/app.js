const cors = require('cors');
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();


const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
};
console.log(mysqlConfig);
const connection = mysql.createConnection(mysqlConfig);

const getUserFromToken = (req) => {
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return user;
}

const verifyToken = (req, res, next) => {
    try {
        getUserFromToken(req);
        next();
    } catch (e) {
        res.send({ error: 'Invalid Token' });
    }
}

app.post('/register', (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
    console.log(email + ", " + password + ", " + firstname + ", " + lastname + " // Gauta ");
    connection.execute(
        'INSERT INTO org (elPastas, vardas, pavarde, slaptazodis) VALUES (?, ?,?,?)',
        [email, firstname, lastname, hashedPassword],
        (err, result) => {
            console.log(err);
            console.log(result);
            if (err?.code === 'ER_DUP_ENTRY') {
                res.sendStatus(400);
            }
            res.send(result);
        }
    )
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    connection.execute(
        'SELECT * FROM org WHERE elPastas=?',
        [email],
        (err, result) => {
            if (result.length === 0) {
                res.sendStatus(401);
            } else {
                const passwordHash = result[0].slaptazodis
                const isPasswordCorrect = bcrypt.compareSync(password, passwordHash);
                if (isPasswordCorrect) {
                    const { idorg, vardas } = result[0];
                    const token = jwt.sign({ idorg, vardas }, process.env.JWT_SECRET_KEY);
                    res.send({ token, idorg, vardas });
                } else {
                    res.sendStatus(401);
                }
            }
        }
    );
});

app.get('/events', verifyToken, (req, res) => {
    const org = getUserFromToken(req);
    console.log(org);
    connection.execute('SELECT * FROM cli WHERE orgid=?', [org.idorg], (err, response) => {
        console.log(response);
        console.log(err);
        res.send(response);
    });
});


app.post('/events', verifyToken, (req, res) => {
    const { Firstname, Lastname, Email, Phone } = req.body;
    const org = getUserFromToken(req);


    connection.execute(
        'INSERT INTO `baigiamasis`.`cli` (`Vardas`, `Pavarde`,`elPastas`, `telNr`,`orgid`) VALUES (?, ?, ?, ?,?)',
        [Firstname, Lastname, Email, Phone, org.idorg],
        (err, response) => {
            console.log(response);
            console.log(err);
            res.send(response);
        });

});
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));