module.exports=(Sequelize,DataType)=>{

    const Usuarios=Sequelize.define('Usuarios',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
        },
        chave:{
            allowNull:true,
            type:DataType.STRING
        },
        nome:{
            allowNull:true,
            type:DataType.STRING
        },
        sobrenome:{
            allowNull:true,
            type:DataType.STRING
        },
        senha:{
            allowNull:true,
            type:DataType.STRING
        },
        activate:{allowNull:true,
            type:DataType.BOOLEAN},
        createdAt:{
            allowNull:true,
            type:DataType.DATE
        },
        updatedAt:{allowNull:true,
            type:DataType.DATE

        }
    },{})
    return Usuarios;
}