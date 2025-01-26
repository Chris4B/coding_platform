module.exports = (Sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        rating: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            validate: {
                min:1,
                maw:5
            },
        },
        comment: {
            type: DataTypes. TEXT,
        }
    })

    return Review;
}