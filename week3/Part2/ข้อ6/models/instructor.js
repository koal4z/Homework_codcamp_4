module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define("instructor", {
    name_en: {
      type: DataTypes.STRING(255)
    },
    name_th: {
      type: DataTypes.STRING(255)
    },
    academic_rank: {
      type: DataTypes.STRING(255)
    },
    expertise: {
      type: DataTypes.STRING(255)
    },
    degree: {
      type: DataTypes.STRING(255)
    }
  });
  return Instructor;
};
