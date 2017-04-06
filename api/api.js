var express = require( 'express' ) ;
var request = require( 'request' ) ;

var app = express() ;
 
app.get('/api/oauth', authCallback) ;

app.get('/api/test', testCallback) ;

app.get('/api/random', randomString) ;

app.listen(8000)



var client_id = 'oauthclient_00009Ila3HV0mDr9V0TEBd' ;
var client_secret = 'XzLnJsrFUxtYSzlOkIrOcCO9P817PMCiYYGwWtIFXC+lkzyKfTyzW7iZv/ma9JyxSbB9WmPlpZ3QPu6Cqt6n' ;
var redirect_uri = 'http://127.0.0.1:8000/api/oauth' ;

var url = 'https://api.getmondo.co.uk/oauth2/token' ;

function testCallback(req, res) {
    console.log(req);
}

function randomString(req, res) {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 5;

    var randomString = Array.apply(null, new Array(stringLength)).map(function () {
        return possible[Math.floor(Math.random() * possible.length)];
    }).join('');

    console.log(randomString);
    return randomString;
}

function authCallback(req, res) 
{

var oauth = {
 'grant_type'    : req.query.grant_type || 'authorization_code' ,
 'client_id'     : client_id      ,
 'client_secret' : client_secret  ,
 'redirect_uri'  : redirect_uri   ,
 [req.query.grant_type === 'refresh_token' ? 'refresh_token'         : 'code']        :
  req.query.grant_type === 'refresh_token' ? req.query.refresh_token : req.query.code
}

console.log(oauth);

request.post( 
	{ 
		'url'   : url   ,
		'form' : oauth
	}, 
	(err, response, body) => 
	{
	    if (!err && response.statusCode === 200) 
	    {
	      res.status(200).json( JSON.parse( body ) ) ;
	    } 
	    else 
	    {
	      res.status(response.statusCode).json( { message: body } ) ; 
	    }
	}
) ;

}