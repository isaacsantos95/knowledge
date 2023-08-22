// Update with your config settings.


//
//  development: {
//    client: 'sqlite3',
//    connection: {
//      filename: './dev.sqlite3'
//    }
//  },
//
//  staging: {
//    client: 'postgresql',
//    connection: {
//      database: 'my_db',
//      user:     'username',
//      password: 'password'
//    },
//    pool: {
//      min: 2,
//      max: 10
//    },
//    migrations: {
//      tableName: 'knex_migrations'
//    }
 // },
//

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'Qwerty@23'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
