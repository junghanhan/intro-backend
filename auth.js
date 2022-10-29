import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

// configure options for JWT Strategy
let jwtOptions = {};
// extractor function - extracting a JWT Token from the Auth header (Bearer authentication)
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// to verify the signature attached to the token received by user
jwtOptions.secretOrKey = process.env.JWT_SECRET;

// auth with JWT Token
// jwt_payload : decoded payload from the token received by user
passport.use(new JwtStrategy(
  jwtOptions, (jwt_payload, done) => {
    if(jwt_payload.name == process.env.JWT_NAME) {
      return done(null, {name : jwt_payload.name}); 
    }
    else {      
      return done(null, false); // 401 Unauthorized
    }    
  }
));