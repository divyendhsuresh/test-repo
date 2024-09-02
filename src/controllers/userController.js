const { AppDataSource } = require('../data-source');
const User = require('../entity/User');

exports.getHomesByUser = async (req, res) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const { username } = req.params;

        const user = await userRepository.findOne({
            where: { username },
            relations: ['homes'],
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user);

        res.json(user.homes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching homes for user', error });
    }
};
