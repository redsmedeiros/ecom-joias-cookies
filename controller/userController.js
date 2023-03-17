const User = require('../models/userModel');

const expressAsyncHandler = require('express-async-handler');

const createUserCtrl = expressAsyncHandler(async (req, res)=>{

    const { email } = req.body;

    const findUser = await User.findOne({ email });

    if(findUser){
        res.json({message: 'Usuário já cadastrado'});
        return;
    }

    const newUser = await User.create(req.body);

    res.json({
        status: "success",
        message: "Usuário criado com successo",
        data: newUser
    })

})

module.exports = {
    createUserCtrl
}