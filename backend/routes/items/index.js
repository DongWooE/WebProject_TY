const { Item } = require('../../models');
const {Router} = require('express');
const router = Router();
const mongoose = require('mongoose');






router.route('/')
.get(async(req,res,next)=>{     //모든 상품 정보들을 리턴함
    try{
    const cond = await Item.find().count();
    if(cond == 0) {
        res.json({ state : "empty", message : "표시할 상품들이 없음"});         
    }
    const result = await Item.find();
    res.json(result);
    

    }catch(error){
        console.error(error);
        next(error);
    }

})
.post(async(req,res,next)=>{        //상품 정보를 받아들임

    try{
    const { productName, productContent, productImage, productPrice} = req.body;

    await Item.create({
        productName,
        productContent,
        productImage,
        productPrice,
    });

    res.json({ state : "productInserted", message : "상품 입력완료"});
    }catch(error){
        console.error(error);
        next(error);
    }

})

router.route('/:id')
.get(async(req,res,next) => {           //상품 1개의 값을 리턴함
    try{
        const cond  = mongoose.Types.ObjectId.isValid(`${req.params.id}`);
        if(!cond) res.json({ state : "idUncorrect", message : ":id가 올바른 형태가 아님"});
        const num = mongoose.Types.ObjectId(`${req.params.id}`);
        const result = await Item.findById(num);
        if(!result) res.json({ state : "notExisted", message : "해당 상품이 존재하지않음"});
        res.json(result);

    }catch(error){
        console.error(error);
        next(error);
    }

})
.patch(async(req,res,next) => {         //상품 1개의 값을 변경함
    try{
        const cond  = mongoose.Types.ObjectId.isValid(`${req.params.id}`);
        if(!cond) res.json({ state : "idUncorrect", message : ":id가 올바른 형태가 아님"});
        const num = mongoose.Types.ObjectId(`${req.params.id}`);
        const result =  await Item.findByIdAndUpdate(num, req.body);
        result.updatedAt = Date.now();
        res.json({state : "updateDone", message : "업데이트가 완료됨"});

    }catch(error){
        console.error(error);
        next(error);
    }
})
.delete(async(req,res,next) =>{     //상품 1개를 삭제함
    try{
        const cond  = mongoose.Types.ObjectId.isValid(`${req.params.id}`);
        if(!cond) res.json({ state : "idUncorrect", message : ":id가 올바른 형태가 아님"});
        const num = mongoose.Types.ObjectId(`${req.params.id}`);
        await Item.findByIdAndDelete(num);
        res.json({state: "deleteDone", message : "삭제 완료"});
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;
