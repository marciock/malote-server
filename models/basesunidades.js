module.exports=(Sequelize,DataType)=>{

    const BasesUnidades=Sequelize.define('BasesUnidades',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER,
        },
        nome:{
            allowNull:false,
            type:DataType.STRING,
        },
        
        activated:{
            allowNull:false,
            type:DataType.BOOLEAN,
        },
        createdAt:{
            allowNull:false,
            type:DataType.DATE,
        },
        updatedAt:{
            allowNull:false,
            type:DataType.DATE,
        }
    },{})
    return BasesUnidades;
}