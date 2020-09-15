const express=require('express');
const router=express.Router();
const bases=require('../../controllers/basesUnidades/show');

router.get('/',bases.show);

module.exports=router;
