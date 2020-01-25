import Sequelize from 'sequelize'

const torrent = [
  // models
  {
    infohash: {
      type: Sequelize.STRING,
      primaryKey: true,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {notEmpty: true}
    },
    size: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {isInt: true}
    },
    files: {
      type: Sequelize.TEXT,
      allowNull: true,
      validate: {notEmpty: true}
    },
    trackers: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    categories: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {notEmpty: true}
    },
    createdAt: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {isDate: true}
    }
  },
  // options
  {
    indexes: [{
      fields: ['infohash', 'files', 'name']
    }],
    timestamps: false
  }
]

const date = [
  // models
  {
    dateInfohash: {
      type: Sequelize.STRING,
      primaryKey: true,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    infohash: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    trackers: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isLowercase: true,
        notEmpty: true
      }
    },
    seeds: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {isInt: true}
    },
    leeches: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {isInt: true}
    },
    peers: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {isInt: true}
    }
  },
  // options
  {
    indexes: [{
      fields: ['infohash', 'date', 'peers']
    }],
    timestamps: false
  }
]

export default {
  torrent,
  date
}
