const express = require("express");
const router = new express.Router();

const MensRanking= require("../models/mens");

//We will handle POST request
router.post("/mens", async(req, res)=>{
    try{
        const addingMensRecords= new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})

//We will handle GET request
router.get("/mens", async(req, res)=>{
    try{
    const getMens=await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

//We will handle GET request for individual
router.get("/mens/:id", async(req, res)=>{
    try{
        const _id= req.params.id;
        const getMen=await MensRanking.findById({_id});
        res.send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

//We will handle PATCH request for Updation
router.patch("/mens/:id", async(req, res)=>{
    try{
        const _id= req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id, req.body,{
            new: true
        });
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);
    }
})

//We will handle DELETE request 
router.patch("/mens/:id", async(req, res)=>{
    try{
        const getMen=await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;