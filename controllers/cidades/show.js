const {Cidades}=require('../../models');

module.exports={

    show:  (req,res)=>{

        Cidades.findAll({
            where:{activated:true},
            attributes:['id','cidade']
        }).then((results)=>{
            res.json(results);
        });

        

    }
}