import database from "./database.js";
import Sequelize from "sequelize";

const user = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    wallet: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    }
})

const aposta = database.define('aposta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

const sorteio = database.define('dia', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nums: {
        type: Sequelize.INTEGER
    }
})

export { user, aposta, sorteio };