module.exports = {

    client: 'postgresql',
    connection: {
      database: 'knowledge_final',
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
