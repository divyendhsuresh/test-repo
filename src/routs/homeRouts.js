require('reflect-metadata'); // Required by TypeORM
const express = require('express');
const router = express.Router();
const { AppDataSource } = require('../data-source'); // Import the data source
const Home = require('../entity/Home');
const UserProperty = require('../entity/UserProperty')

AppDataSource.initialize()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => console.log('Database connection error:', error));

// Route to get all users
router.get('/home', async (req, res) => {
    const homeRepository = AppDataSource.getRepository(Home);
    const countHome = await homeRepository.find();
    console.log(countHome);
    res.json(countHome);
});

// Route to create a new user
router.post('/users', async (req, res) => {
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.json(result);
});

// router.get('/:id/homes', async (req, res) => {

//     const userId = parseInt(req.params.id, 10); // Convert ID to integer

//     try {
//         const homeRepository = AppDataSource.getRepository('User');

//         const homes = await homeRepository.createQueryBuilder('user')
//             .innerJoin('user.user_id', 'userProperty.user_id')
//             .innerJoin('userProperty.home_id', 'home.home_id')
//             .where('user.user_id = :userId', { userId })
//             .getMany();

//         // console.log(homes);

//         res.json(homes); // Return the list of homes
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

module.exports = router;