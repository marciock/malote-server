const {BasesUnidades}=require('../../models');

module.exports={
    save:async(req,res)=>{

   let find=await  BasesUnidades.findOne({
           where:{nome:req.body.nome}
       });

      if(find===null){
        const  data= {
            nome:req.body.nome,
            activated:true,
            createdAt:Date(),
            updatedAt:Date()
        }
       
         let results=await  BasesUnidades.create(data);
        
         res.json(results)
      }
      else{
          let results={error:true,message:'Base já Existente'}
          res.json(results)
          console.log(results)
        }
       

    }
}