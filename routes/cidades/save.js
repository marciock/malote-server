const express=require('express');
const router=express.Router();
const cidades=require('../../controllers/cidades/save');

router.post('/',cidades.save);

module.exports=router;
