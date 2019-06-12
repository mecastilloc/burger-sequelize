module.exports = function (sequelize, DataTypes) {
	var Burgers = sequelize.define("burgers", {
		burger_name:{
			type: DataTypes.STRING,
			allowNull: false,
			freezeTableName: true,
			validate: {
				len: [1],
			}
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