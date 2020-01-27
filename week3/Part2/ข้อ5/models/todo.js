module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("todo", {
    task: {
      type: DataTypes.STRING(255)
    },
    date: {
      type: DataTypes.DATE
    }
  });
  return Todo
};
