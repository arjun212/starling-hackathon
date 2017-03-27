var open    = require( 'open' ) ;



/*
Client ID: oauthclient_00009Ila3HV0mDr9V0TEBd
Client Secret: XzLnJsrFUxtYSzlOkIrOcCO9P817PMCiYYGwWtIFXC+lkzyKfTyzW7iZv/ma9JyxSbB9WmPlpZ3QPu6Cqt6n
User ID: user_00009Hrlzyp64kCYgj5hMP
Account ID: acc_00009I1wWGdeJf3zfEejrt
Access token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0OTA1OTA4NzQsImlhdCI6MTQ5MDU2OTI3NCwianRpIjoidG9rXzAwMDA5SWx2NFFEWHdockF4czdLbkIiLCJ1aSI6InVzZXJfMDAwMDlIcmx6eXA2NGtDWWdqNWhNUCIsInYiOiIyIn0.bGhk4CQEO5XFELbaQ3k_ayDlDVM0gsI-5-zdTvmIQ2Y
*/

var client_id = 'oauthclient_00009Ila3HV0mDr9V0TEBd' ;
var redirect_uri = '127.0.0.1:8000/' ;
var response_type = 'code' ;
var state = 'MAS' ;

var monzoAuthUrl = 'https://auth.getmondo.co.uk/?'   +
                   'client_id='      + client_id     + 
                   '&redirect_uri='  + redirect_uri  + 
                   '&response_type=' + response_type +
                   '&state='         + state           ;


open( monzoAuthUrl ) ;
