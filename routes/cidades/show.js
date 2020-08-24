const express=require('express');
const router=express.Router();
const cidades=require('../../controllers/cidades/show');

router.get('/',cidades.show);

module.exports=router;
