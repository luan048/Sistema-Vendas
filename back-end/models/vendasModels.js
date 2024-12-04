import {database} from '../database/db.js';
import { DataTypes, Sequelize } from 'sequelize';

export const VendasModel = database.define("tb_vendas", {
    id:{
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    productName:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    productPrice:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    qntSales:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})