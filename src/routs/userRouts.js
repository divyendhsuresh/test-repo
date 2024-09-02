require('reflect-metadata'); // Required by TypeORM
const express = require('express');
const router = express.Router();
const { AppDataSource } = require('../data-source'); // Import the data source
const User = require('../entity/User');
const { getHomesByUser } = require('../controllers/userController');

AppDataSource.initialize()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => console.log('Database connection error:', error));

    
// Route to get all users
router.get('/find-all', async (req, res) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    // console.log(users);
    res.json(users);
});

// Route to create a new user
router.post('/users', async (req, res) => {
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.json(result);
});

router.get('/user/:username/homes', getHomesByUser);


module.exports = router;