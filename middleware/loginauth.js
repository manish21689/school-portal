const isLoggedIn = (req, res, next) => {
    if (!req.user)
    {
      return res.status(401).json("Please First Login then view pages...")  
    }
        next()
}
module.exports={isLoggedIn}