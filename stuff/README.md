# starling-hackathon
Starling Hackathon 2017


docs - will hold documentation, and any non-source code related files.

application - Actual Startling application

test -  different folders, tests we can do and play around with and break as much as possible. 
		Name folders well to get an idea of what the code within the folder is doing




Brief overview of node:

Every folder should contain a package.json file (This will make npm work correctly).
https://docs.npmjs.com/files/package.json

NPM (Node Package Manager) lets you install/pull in any libraris/dependencies your code may have, whether its a library to do Machine Learning, or things to send OAuth2 requests.

MEAN - MongoDB, Expressjs, AngularJS, NodeJS - Full stack do implement a web application

NPM libraries we're interested in : 

ExpressJS - To expose our own API, so that our client (phone/webapp has access to our data) (https://www.npmjs.com/package/express)
https://www.npmjs.com/package/express

RequestJS - Able to make https REST calls to other API's to get data, also has functionality to let OAuth2 work immedieately.
https://www.npmjs.com/package/request

MongoDB (w/AWS) - Hosted Database
https://aws.amazon.com/marketplace/pp/B01MYV9GAN?qid=1490536442325&sr=0-9&ref_=srh_res_product_title