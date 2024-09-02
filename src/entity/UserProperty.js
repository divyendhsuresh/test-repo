const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'UserProperty',
    tableName: 'user_property',
    columns: {
        user_property_id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        user_id: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        home_id: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
    },
    // relations: {
    //     user: {
    //         type: 'many-to-one',
    //         target: 'User',
    //         joinColumn: {
    //             name: 'user_id',
    //         },
    //         nullable: false,
    //         onDelete: 'CASCADE',
    //     },
    //     home: {
    //         type: 'many-to-one',
    //         target: 'Home',
    //         joinColumn: {
    //             name: 'home_id',
    //         },
    //         nullable: false,
    //         onDelete: 'CASCADE',
    //     },
    // },
});
