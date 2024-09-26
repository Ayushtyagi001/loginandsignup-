const { render } = require('ejs')
const express = require('express')
const bcrypt = require('bcrypt')
const Signup = require('../models/Signup')
const saltRound = 10;
function loginpage(req,res){
  try{
    res.render('login')
  }catch(err){
    console.log(err)
  }
}
function signuppage(req,res){
   try{
    res.render('signup')
   }catch(err){
    console.log(err)
   }
}

async function signupSubmit(req,res){
 try{
      let customer = await new Signup(req.body)
      console.log(customer)
       
      await customer.save()
      res.render('login')
 }catch(err){
    console.log(err)
 }
}
async function dologin(req,res){
  try {
    console.log(req.body);
    let user = await Signup.findOne({ email: req.body.username });
    if(!user){

     res.end("<h2>no user found</h2>")

    }
    else
    {
      const isMatch= await bcrypt.compare(req.body.password,user.password);
      if(isMatch){
        res.render('welcome user..')
      }
      else{
        res.end('wrong password')
      }
    }
    
  } catch (error) {
    console.log(error)
    
  }
}


module.exports={
  loginpage,
  signuppage,
  signupSubmit,
  dologin
}