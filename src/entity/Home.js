const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Home',
    tableName: 'home',
    columns: {
        home_id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        street_address: {
            type: 'varchar',
            nullable: false,
        },
        state: {
            type: 'varchar',
            nullable: false,
        },
        zip: {
            type: 'int',
            nullable: false,
        },
        sqft: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: false,
        },
        beds: {
            type: 'int',
            nullable: false,
        },
        baths: {
            type: 'int',
            nullable: false,
        },
        list_price: {
            type: 'decimal',
            precision: 15,
            scale: 2,
            nullable: false,
        }
    },
    // relations: {
    //     properties: {
    //         type: 'one-to-many',
    //         target: 'UserProperty',
    //         mappedBy: 'home',
    //     },
    // },
});
