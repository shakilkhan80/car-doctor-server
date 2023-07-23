/**
 * JWT secure your api 
 * 
 * ========
 * create token
 * ========
 * 1.after user login send user basic info to create token
 * 2.in server install npm i jsonwebtoken
 * 3.import jsonwebtoken
 * 4.jwt.sign(payload,secret,expires)
 * 5.return token to the client site
 * 
 * client site 
 * 
 * 1.after reciveing the data store it in the local storage
 * 2.use general space onAuthState change
 * -----------
 * sent the token to server site 
 * ----------
 * for sensitive api call () send authorization headers{authorization: Berar token}
 * ---------
 * verify
 * --------
 * 1.create jwtVerify function()\
 * 2.this wil have 3 params req,res ,next
 * 3.first check weather the authorization headers exists
 * 4.if not send (401)
 * 5.get the token out of authorization
 * 6.call jwt.verify(token,secret (err,decoded))
 * 7.if error send (403)
 * 8.set decoded to req.decoded to retrive it later
 * 9.cal next()
 * 
 * 
 * _________
 * check the weather email and req email
 * 
 * 
 * 
*/