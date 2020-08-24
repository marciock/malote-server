const express=require('express');
const router=express.Router();
const usuarios=require('../../controllers/usuarios/show');

router.post('/',usuarios.checkLogin);

module.exports=router;