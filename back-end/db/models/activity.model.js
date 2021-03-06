'use strict';

module.exports = (sequelize, DataTypes) => {
  const activities = sequelize.define('activities', {
    date: DataTypes.DATEONLY,
    notes: DataTypes.STRING,
    time: DataTypes.INTEGER,
    commissionName: {
      type: DataTypes.STRING,
      references: {
        model: 'commissions',
        key: 'name',
        as: 'commissionName',
      }
    },
    manufactureName: {
      type: DataTypes.STRING,
      references: {
        model: 'manufactures',
        key: 'name',
        as: 'manufactureName',
      }
    }
  }, {timestamps: false});
  activities.associate = function(models) {
    // associations can be defined here
    activities.belongsTo(
        models.commissions,
        {foreignKey: 'commissionName', onDelete: 'CASCADE'});
    activities.belongsTo(
        models.manufactures,
        {foreignKey: 'manufactureName', onDelete: 'CASCADE'})
  };
  return activities;
};