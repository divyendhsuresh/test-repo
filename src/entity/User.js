const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'user',
    columns: {
        user_id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        username: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        email: {
            type: 'varchar',
            unique: true,
            nullable: false,
        }
    },
    // relations: {
    //     properties: {
    //         type: 'one-to-many',
    //         target: 'UserProperty',
    //         mappedBy: 'user',
    //     },
    // },
});
