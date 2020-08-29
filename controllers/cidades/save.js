const {Cidades}=require('../../models');

module.exports={
    save: async (req,res)=>{

      let findCidade= await Cidades.findOne({
           where:{cidade:req.body.cidade}
       })

        const  data= {
            cidade:req.body.cidade,
            baseUnidade:req.body.baseUnidade,
            activated:true,
            createdAt:Date(),
            updatedAt:Date()
        }

       let results= await Cidades.create(data);

       res.json(results);

    }
}