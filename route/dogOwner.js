const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt')
const DogOwnerSchema = require('../models/dogownerModel')
// const {RegisterDogOwner} = require('../controller/dogownerCont')

// router.post('/', RegisterDogOwner);

router.post('/', async (req, res) => {
    try {
        const collect = req.body;
        if(collect.username != null && collect.password != null) {
            if((collect.username).length >= 5 && (collect.password).length >=5) {
                const DogOwnerName = await DogOwnerSchema.find({username:collect.username})
                if(DogOwnerName == collect.username) {
                    console.log('err 3')
                    return res.json({access:true, error:true, msg:process.env.UsernameErr})
                } else {
                    const addDogOwner = new dogOwner({
                        username:collect.username,
                        password:bcrypt.hashSync(collect.password, 5)
                    })
                    await addDogOwner.save()
                    return res.json({access:true, error:false, input:true, user:{main:addDogOwner}})
                }
            } else {
                console.log('err 2')
                return res.json({access:true, error:true, input:false})
            }
        } else {
            console.log('err 1');
            return res.json({access:true, error})
        }
    } catch (error) {
        console.log(error)
        return res.json({access:false, error})
    }
})

module.exports = router;