module.exports=(Sequelize,DataType)=>{
    const Malotes=Sequelize.define('Malotes',{
        id:{
            allowNull:true,
            
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

    Malotes.associate=(models)=>{
        Malotes.belongsTo(models.BasesUnidades,{
            foreingKey:'origem',
            targetKey:'id',
            as:'o'
        })
        Malotes.belongsTo(models.BasesUnidades,{
            foreingKey:'destino',
            targetKey:'id',
            as:'d'
        })
        Malotes.belongsTo(models.Tipos,{
            foreingKey:'tipo',
            targetKey:'id',
            as:'t'
        })
        
        Correios.belongsTo(models.Statuses,{
            foreingKey:'status',
            targetKey:'id',
            as:'s'
        })
        Malotes.belongsTo(models.Usuarios,{
            foreingKey:'usuario',
            targetKey:'id',
            as:'u'
        })
       

        
    }
    return Correios;


}