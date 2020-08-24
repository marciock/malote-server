module.exports=(Sequelize,DataType)=>{

    const Cidades=Sequelize.define('Cidades',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER,
        },
        cidade:{
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
    return Cidades;
}