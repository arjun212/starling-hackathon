var express = require( 'express' ) ;
var request = require( 'request' ) ;

var app = express() ;
 
app.get('/oauth/success', function (req, res) {
  res.send('Auth Was a Success') ;

  console.log( req ) ;
}) ;


app.get('/oauth', authCallback) ;
 
app.listen(8000)


/*
Client ID: oauthclient_00009Ila3HV0mDr9V0TEBd
Client Secret: XzLnJsrFUxtYSzlOkIrOcCO9P817PMCiYYGwWtIFXC+lkzyKfTyzW7iZv/ma9JyxSbB9WmPlpZ3QPu6Cqt6n
User ID: user_00009Hrlzyp64kCYgj5hMP
Account ID: acc_00009I1wWGdeJf3zfEejrt
Access token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0OTA1OTA4NzQsImlhdCI6MTQ5MDU2OTI3NCwianRpIjoidG9rXzAwMDA5SWx2NFFEWHdockF4czdLbkIiLCJ1aSI6InVzZXJfMDAwMDlIcmx6eXA2NGtDWWdqNWhNUCIsInYiOiIyIn0.bGhk4CQEO5XFELbaQ3k_ayDlDVM0gsI-5-zdTvmIQ2Y
*/

var client_id = 'oauthclient_00009Ila3HV0mDr9V0TEBd' ;
var client_secret = 'XzLnJsrFUxtYSzlOkIrOcCO9P817PMCiYYGwWtIFXC' ;
var redirect_uri = '127.0.0.1:8000/oauth/success' ;
var grant_type = 'authorization_code' ;

function authCallback(req, res) 
{

var oauth = {
 'grant_type'    : grant_type     ,
 'client_id'     : client_id      ,
 'client_secret' : client_secret  ,
 'redirect_uri'  : redirect_uri   ,
 'code'          : req.query.code
}

request.post( { 
	'url'   : url   ,
	'oauth' : oauth
} ) ;

}