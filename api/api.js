var express = require( 'express' ) ;
var request = require( 'request' ) ;
var cors = require( 'cors' ) ;
var app = express() ;
app.use(cors())

var access_token = "nUoPyZnXJLA7BWUWUoR4KNNwKJx8oTilYv3d3dMaqYMGtbmzkJoe2NZSl7wKZ556"
 


api.get( 'api/', fnCbk ) ;


api.get( 'api/consume/QR', qrConsumptionCbk ) ;

api.get( 'api/getAllTransactions', getAllTransactions ) ;

api.get( 'api/getTopTransactions', qrConsumptionCbk2 ) ;


api.get( 'api/consume/QR3', qrConsumptionCbk3 ) ;



app.get('/api/starling/getaccount', getAccount) ;

app.listen(8000)


function qrConsumptionCbk(req, res)
{
	res.status( 200 ).send( "qrConsumptionCbk, Called" ) ;
}

function getAllTransactions(req, res)
{
	res.status( 200 ).send( "getAllTransactions, Called" ) ;
}

function qrConsumptionCbk2(req, res)
{
	res.status( 200 ).send( "qrConsumptionCbk2, Called" ) ;
}

function qrConsumptionCbk3(req, res)
{
	res.status( 200 ).send( "qrConsumptionCbk3, Called" ) ;
}


//=============================================================================
// Monzo OAuth Logic, If we need it, we'll use it
//=============================================================================

/*
app.get('/api/oauth', authCallback) ;

var client_id = 'oauthclient_00009Ila3HV0mDr9V0TEBd' ;
var client_secret = 'XzLnJsrFUxtYSzlOkIrOcCO9P817PMCiYYGwWtIFXC+lkzyKfTyzW7iZv/ma9JyxSbB9WmPlpZ3QPu6Cqt6n' ;
var redirect_uri = 'http://127.0.0.1:8000/api/oauth' ;

var url = 'https://api.getmondo.co.uk/oauth2/token' ;

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
*/