import Sequelize from 'sequelize';

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite'
})

export default database;