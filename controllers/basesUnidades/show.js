const {BasesUnidades}=require('../../models');

module.exports={

    show: async (req,res)=>{

      let results=await BasesUnidades.findAll({
            where:{activated:true},
            attributes:['id','nome','createdAt','updatedAt']
        });

        res.json(results)

        

    },
    showEdit:async(req,res)=>{
        
        let results=await  BasesUnidades.findOne({
            where:{id:req.query.id}
        });
       // console.log(results)
        res.json(results);

    }
}