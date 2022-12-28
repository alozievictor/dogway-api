const bcrypt = require('bcrypt')
const DogOwnerSchema = require('../models/dogownerModel')

const RegisterDogOwner = async (req, res) => {
    const collect = req.body;
    try {
        if(collect.username != null && collect.password != null) {
            if((collect.username).length >= 5 && (collect.password).length >=5) {
                const DogOwnersName = await DogOwnerSchema.find({username:collect.username})
                if(DogOwnersName) {
                    return res.json({access:true, error:true, msg:process.env.UsernameErr})
                } else {
                    const DogOwnersPassword = await DogOwnerSchema.find({password:collect.password})
                    if(DogOwnersPassword) {
                        return res.json({access:true, error:true, msg:process.env.PasswordErr})
                    } else {
                        const saveDogOwner = new dogOwner({
                            username:collect.username,
                            password:bcrypt.hashSync(collect.password, 5)
                        })
                        saveDogOwner();
                    }
                }
            } else {
                return res.json({access:true, error:true})
            }
        } else {
            return res.json({access:true, error})
        }
    } catch (error) {
        console.log(error)
        return res.json({access:false, error})
    }
}

module.exports = {RegisterDogOwner}