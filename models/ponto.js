const Sequelize = require('sequelize');
const database = require('../database/database');

const Ponto = database.define('hemonucleo',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    geometria:{
        type: Sequelize.GEOMETRY,
        allowNull: false
    }
});

module.exports = Ponto;