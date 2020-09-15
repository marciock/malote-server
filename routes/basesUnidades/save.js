const express=require('express');
const router=express.Router();
const bases=require('../../controllers/basesUnidades/save');

router.post('/',bases.save);

module.exports=router;
