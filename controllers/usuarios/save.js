const {Usuarios}=require('../../models');

module.exports={
    save:  (req,res)=>{
        let findChave;
       Usuarios.findOne({
           where:{chave:req.body.chave}
       }).then((results)=>{
           findChave=results;
       })
       console.log(findChave)
      // if(findChave)
        const  data= {
            chave:req.body.chave,
            nome:req.body.nome,
            sobrenome:req.body.sobrenome,
            email:req.body.email,
            senha:req.body.senha,
            activated:true,
            createdAt:Date(),
            updatedAt:Date()
        }

         Usuarios.create(data).then((results)=>{
            res.json(results);
         });

       

    }
}