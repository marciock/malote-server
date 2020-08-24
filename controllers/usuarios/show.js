const fs=require('fs');
const {Usuarios}=require('../../models');
const bcrypt=require('bcryptjs');

module.exports={
    show:(req,res)=>{
        Usuarios.findAll({
             where: { actived:true } ,
            attributes:['id','chave','nome','sobrenome','email','senha','createdAt','updatedAt'],
            
        }).then((results)=>{
            //res.render('produtos/produtos',{data:results});
            res.json(results);
        })
    },
    checkLogin:(req,res)=>{
        const qchave=req.body.chave;
        const qsenha=req.body.senha;

        console.log(qemail);
       let results=Usuarios.findOne({where:{actived:true,chave:qchave}}).then((results)=>{
        if(results===null){
            let message={
                error:true,
                field:'chave',
                text:'Email não encontrado'
                }
                
                res.json(message);
            }
            else{
                bcrypt.compare(qsenha,results.senha,(err,data)=>{
                    if(data===true){

                        let message={error:false};
                        let obj=Object.assign(message,results.dataValues);
                       // res.json(results);
                        res.json(obj);
                    }
                    else{
                     let message={
                         error:true,
                         field:'senha',
                         text:'Senha não confere'
                         }
                     
                         res.json(message);
         
                    }
               });
               
    
            }
       });
       
       
        
    },
    showEdit:(req,res)=>{
        const qId=req.query.id;
        //const qpass=req.body.password;

        //console.log(qemail);
       let results=Usuarios.findOne({where:{actived:true,id:qId}}).then((results)=>{
        if(results===null){
            let message={
                error:true,
                field:'id',
                text:'Usuário não encontrado'
                }
                
                res.json(message);
            }
            else{
                
                     res.json(results)
                        
         
                    }
              
               
    
            })
      

    }
}