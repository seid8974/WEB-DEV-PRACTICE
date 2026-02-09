require('dotenv').config();

module.exports = function (){
    if(!process.env.ACCESS_TOKEN){
        throw new Error('FATAL ERROR! jwtAccessToken is not defined!');
    };
};