module.exports = function (sequelize, DataTypes) {
	var Burgers = sequelize.define("burgers", {
		burger_name:{
			type: DataTypes.STRING,
			allowNull: false,
			freezeTableName: true,
		},
		devoured :{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			freezeTableName: true,
			defaultValue: false
		}
		
	});
	
	return Burgers;
};