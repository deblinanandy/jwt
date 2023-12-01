import express from 'express';
import registerController from '../CONTROLLER/ADMIN/Registration.js';
import loginController from '../CONTROLLER/ADMIN/Loging.js';
import verifyToken from '../CONTROLLER/ADMIN/Veryfytoten.js';
import getAllUsersController from '../CONTROLLER/ADMIN/Getalluser.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("<h3>File upload Example</h3>");
  console.log(req.headers['authorization'])
});

// image upload route
// router.post('/userupload', upload.single('profileImg'), UserController.fileupload);

// image listing route
router.post('/adminreg', registerController);
router.post('/adminlog', loginController);

// Protected route that requires a valid token

router.get('/users',verifyToken)


export default router;
