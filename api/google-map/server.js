var express = require( 'express' ) ;
// var request = require( 'request' ) ;
var app = express() ;

//Access token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0OTA1OTA4NzQsImlhdCI6MTQ5MDU2OTI3NCwianRpIjoidG9rXzAwMDA5SWx2NFFEWHdockF4czdLbkIiLCJ1aSI6InVzZXJfMDAwMDlIcmx6eXA2NGtDWWdqNWhNUCIsInYiOiIyIn0.bGhk4CQEO5XFELbaQ3k_ayDlDVM0gsI-5-zdTvmIQ2Y



app.get( "/api/test", function(req, res) {
	res.send( "api/test called" ) ;
} ) ;


app.listen( 8000 ) ;

