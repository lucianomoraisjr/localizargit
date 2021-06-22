const{Router} = require('express');
const axios = require('axios')
const routes = Router();


routes.post('/devs', async (req,res)=>{
    const {github_username}=req.body
    const apiResponse = await axios.get(`https://api.github.com/users/lucianomoraisjr`)
  console.log(apiResponse.data)
    //return response.json({message:"start"})
})


routes.get('/', (req,res) =>{
    return res.json({message:'Start'});
    });


module.exports = routes