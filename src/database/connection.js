"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const sequelize = new sequelize_1.Sequelize(config_1.config.DB_NAME, config_1.config.DB_USER, config_1.config.DB_PASSWORD, {
    host: config_1.config.DB_HOST,
    port: Number(config_1.config.DB_PORT),
    dialect: "mysql",
});
exports.default = sequelize;
