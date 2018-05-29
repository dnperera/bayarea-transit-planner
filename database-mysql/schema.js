const Sequelize = require('sequelize');

const { connection } = require('./');

const station = connection.define('station', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  is_favorite: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
}, { timestamps: false });

const stop = connection.define('stop', {
  line_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  station_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  is_transfer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
}, { timestamps: false });

const service_lines = connection.define('service_lines', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  color: {
    type: Sequelize.STRING(6),
    allowNull: false
  },
  origin_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  destination_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { timestamps: false });

connection.sync({ force: false })
  .then(() => console.log('successfully synced database'))
  .catch(err => console.log('error syncing database ', err));

module.exports = {
  station,
  stop,
  service_lines
};
