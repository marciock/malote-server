module.exports=(Sequelize,DataType)=>{

    const Tipos=Sequelize.define('Tipos',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
        },
        tipo:{
            allowNull:true,
            type:DataType.STRING
        },
        createdAt:{
            allowNull:true,
            type:DataType.DATE
        },
        updatedAt:{
            allowNull:true,
            type:DataType.DATE

        }
    },{})
    return Tipos;

}