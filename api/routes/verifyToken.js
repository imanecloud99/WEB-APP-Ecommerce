const jwt = require("jsonwebtoken");

const verifyToken =(req,res,next)=>{

    const authheader =req.headers.token
    if(authheader){
        const token=authheader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(403).json("Token is not valid");
            req.user=user; 
            next(); //leave this fun and go back to the router user.js

        });
    }else{
        return res.status(401).json("You re not authenticated")
    }
};

const verifyTokenAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id|| req.user.isAdmine){
            next();
        }
        else{
            res.status(403).json("You re not allowed!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmine) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
module.exports={ verifyToken,
    verifyTokenAuthorization ,
    verifyTokenAndAdmin};