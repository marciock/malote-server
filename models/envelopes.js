module.exports=(Sequelize,DataType)=>{
    const Envelopes=Sequelize.define('Envelopes',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
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
    return Envelopes;
}
// falta relacionamento