const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetowebdois", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize,
    sequelize
}