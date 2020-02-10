export default function createModel(sequelize)
{
    return sequelize.define("product", {
    idProduct: {
      type: DataTypes.INTEGER
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
  });
}