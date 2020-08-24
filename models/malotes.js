module.exports=(Sequelize,DataType)=>{
    const Malotes=Sequelize.define('Malotes',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
        },
        correio:{
            allowNull:true,
            type:DataType.INTEGER
        },
        numero:{
            allowNull:true,
            type:DataType.INTEGER
        },
        activated:{
            allowNull:true,
            type:DataType.BOOLEAN
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
    return Malotes;
}
// falta relacionamento