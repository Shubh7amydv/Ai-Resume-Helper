const jwt = require("jsonwebtoken");

// This middleware will check whether the user is authenticated or not by checking the token in cookies and verifying it

function authUser(req, res, next) {
    const token = req.cookies.token;

    // If tokennis not provided 
    if (!token) {
        return res.status(401).json({
            message: "Token not available"
        });
    }


    // If token is provided we need to check it whether it is genuine or not 
    /**
     * Token = header + payload + signature

    Verification:
    newSignature = HASH(header + payload + SECRET)

    If newSignature == token.signature → VALID ✅
    Else → INVALID ❌
     */

    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach user info to request
        req.user = decoded;

        next(); // move to next middleware / controller

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}



module.exports={
    authUser
}