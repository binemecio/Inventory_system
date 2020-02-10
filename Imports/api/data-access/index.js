import Sequelize from 'sequelize'
import makeProductDb from './product-db.js';
import createModel from './schema.js';
const DataTypes = Sequelize.DataTypes

let access = {
  host: "localhost",
  user: "root",
  password: "",
  database: 'inventory',
  port: 3306
}

const sequelize = new Sequelize(access.database, access.user, access.password, {
  host: access.host,
  dialect: 'mariadb'
});

const Product = sequelize.define("product", {
  idProduct: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  sizes: DataTypes.TEXT,
  color: DataTypes.TEXT,
  buyPrice: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  minPrice:{
    type: DataTypes.INTEGER,
    defaultValue: 0
    },
  deliveryPrice:{
    type: DataTypes.INTEGER,
    defaultValue: 0
    }
},{
  timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name
});

const productDb = makeProductDb({ Product })
export default productDb

