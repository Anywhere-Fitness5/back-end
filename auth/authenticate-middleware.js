const jwt = require("jsonwebtoken");

// checking user roles since instructor users
// should still have access to client user endpoints,
// but client users shouldn't have access to instructor endpoints.
const roles = ["Client", "Instructor"];

function restrict(role) {
  return async (req, res, next) => {
    const authError = {
      message: "Invalid credentials",
    };

    try {
      // manually pulling the token that got sent from the client's cookie jar
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json(authError);
      }

      // checks to make sure the signature is valid and the token is not expired
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        }

        // checks if the role in our token is above or equal to the required role for the endpoint
        if (role && roles.indexOf(decoded.userRole) < roles.indexOf(role)) {
          return res.status(401).json(authError);
        }

        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;
