module.exports = function (sequelize, DataTypes) {
	var customers = sequelize.define("customers", {
		customer_name:{
			type: DataTypes.STRING,
			allowNull: false,
			freezeTableName: true,
		},
		
		
	});
	
	return customers;
};