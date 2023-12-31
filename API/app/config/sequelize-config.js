module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'LegalFirmDB',
    host: 'localhost',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'SequelizeMeta',
  },
  test: {
    username: 'root',
    password: 'freelance',
    database: 'LegalFirmDB',
    host: 'mysql',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'SequelizeMeta',
  },
  production: {
    username: 'root',
    password: 'freelance',
    database: 'LegalFirmDB',
    host: 'mysql',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'SequelizeMeta',
  },
};
