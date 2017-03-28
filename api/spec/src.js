var request = require('request');
 


request({
  url: 'https://api.monzo.com/transactions',
  method: 'GET',
  auth: {
  	'bearer' : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
				eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2S
				U5ER3pUM2s2dHo4anAiLCJleHAiOjE0OTAxNT
				Y1NjUsImlhdCI6MTQ5MDEzNDk2NSwianRpIjo
				idG9rXzAwMDA5SWJWNEVJcmhhanNXY3A0TEoi
				LCJ1aSI6InVzZXJfMDAwMDlIcmx6eXA2NGtDW
				WdqNWhNUCIsInYiOiIyIn0.vkskV8NhsYe_wA
				l3De2RfR8zddOT2OSyjWpJPc49l5U`
  },
  qs: {
    'account_id' : 'acc_00009I1wWGdeJf3zfEejrt' ,
    'expand[]'   : 'merchant'
  }
}, function(err, res, body) {
	body = JSON.parse(body);
	// console.log(body.transactions);
	// console.log(body[0]);
	for (var transaction in body['transactions']) {

		// console.log(body['transactions'][transaction]['merchant']);
		if ((body['transactions'][transaction]['merchant'])) { 
			if (body['transactions'][transaction]['merchant']['address']) {
				
				console.log(body['transactions'][transaction]['merchant']['address']['longitude']) ;
				console.log(body['transactions'][transaction]['merchant']['latitude']) ;

			} else {
				console.log('NO ADDRESS FOR - ', body['transactions'][transaction]['merchant']['name']);

			}
		// 	if (body['transactions'][transaction]['merchant']['address']['longitude'] && body['transactions'][transaction]['merchant']['latitude'])
		// 	{
		// 		console.log(body['transactions'][transaction]['merchant']['name']);
			// }
		} else {
			console.log('NO MERCHANT FOR - ', body['transactions'][transaction]['id']);
		}
	}
	//console.log(body);
});

