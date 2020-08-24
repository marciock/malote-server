module.exports=(Sequelize,DataType)=>{
    const Statuses=Sequelize.define('Statuses',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
        },
        status:{
            allowNull:true,
            type:DataType.STRING
        },
        
    },{})
    return Statuses;
}