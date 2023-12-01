import jwt from 'jsonwebtoken';
import AdminModel from '../../Model/AdminModel.js';

const JWT_SECRET_KEY = 'm';

const verifyToken = async (req, res, next) => {
     try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const verified = jwt.verify(token,JWT_SECRET_KEY);
    req.user = verified;  
    next();
     } catch (err) {
          console.error('Error verifying token:', err.message);
    res.status(400).send('Invalid token !');
  }
};

export default verifyToken;
