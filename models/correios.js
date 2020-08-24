module.exports=(Sequelize,DataType)=>{
    const Correios=Sequelize.define('Correios',{
        id:{
            allowNull:true,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
        },
        origem:{
            allowNull:true,
            type:DataType.INTEGER
        },
        destino:{
            allowNull:true,
            type:DataType.INTEGER
        },
        tipo:{
            allowNull:true,
            type:DataType.INTEGER
        },
        status:{
            allowNull:true,
            type:DataType.INTEGER
        },
        usuario:{
            allowNull:true,
            type:DataType.INTEGER
        },

        numeroMalote:{
            allowNull:false,
            type:DataType.INTEGER
        },
        numeroLacre:{
            allowNull:false,
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

    Correios.associate=(models)=>{
        Correios.belongsTo(models.Cidades,{
            foreingKey:'origem',
            targetKey:'id',
            as:'o'
        })
        Correios.belongsTo(models.Cidades,{
            foreingKey:'destino',
            targetKey:'id',
            as:'d'
        })
        Correios.belongsTo(models.Tipos,{
            foreingKey:'tipo',
            targetKey:'id',
            as:'t'
        })
        
        Correios.belongsTo(models.Statuses,{
            foreingKey:'status',
            targetKey:'id',
            as:'s'
        })
        Correios.belongsTo(models.Usuarios,{
            foreingKey:'usuario',
            targetKey:'id',
            as:'u'
        })
       

        
    }
    return Correios;


}