const Signup = require('../models/Signup');
const bcrypt = require('bcrypt');
const saltRound = 10;

async function createadmin() {
    try {
        let password = bcrypt.hashSync('12345',saltRound);
        let userSchema= {
            firstname:'Admin',
            email:'admin@rdec.in',
            password:password,
            usertype: 1,
        }
        let user = new Signup(userSchema);
        await user.save();
        console.log("admin has been created successfully....")
    } catch (error) {
        console.log(error);
        
    }

    
}
module.exports= {
    createadmin
}