router.post('/register', async (req, res) => {
    const collect = req.body;
    try {
        if(collect.username != null && collect.password != nulll) {
            if((collect.username).length >= 5 && (collect.password).length >=5) {
                const DogOwnersName = await dogOwner.find({username:collect.username})
                if(DogOwnersName) {
                    return res.json({access:true, error:true, msg:process.env.UsernameErr})
                } else {
                    const DogOwnersEmail = await dogOwner.find({email:collect.email})
                    if(DogOwnersEmail) {
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
})