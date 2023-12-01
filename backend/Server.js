import express from 'express';
import router from './Router/Router.js'; // Assuming 'router' is a JavaScript module, use '.mjs' extension
import Database from './Database/DB.js'; // Assuming 'db' is a JavaScript module, use '.mjs' extension
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'; // Use lowercase 'jwt' instead of 'Jwt'
import cors from 'cors';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', router);
// app.use('/public', express.static('public'));
// app.use("/uploads", express.static('uploads'));
Database();

const port = 9000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
