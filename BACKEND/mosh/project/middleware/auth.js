const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = res.header('x-auth-tokoen');
    if(!token) return res.status(401).send('Access Denied. No Token Provided!');

    try{
        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN);
        req.user = decoded;
        next();
    }catch(ex){
        res.status(400).send('Invalid Access!');
    }
};

module.exports = auth;