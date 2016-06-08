//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8124; 

//Create a server
var server = http.createServer(function (request, res){
   res.setHeader('Access-Control-Allow-Origin', '*');
	
	var json = JSON.stringify({
		id : 1,
		message : 'Hurray it worked'
	});
	
    res.end(json);
});

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
}); 