var fs = require('fs');
var myObj = {};
function a(){
return fs.readFile('t1.txt', function(err, data){
		if(err){
			console.log(err);
			return;
		}
		return data;

})
}
function b() {
	return new Promise(function(resolve, reject) {
       fs.readFile('t2.txt', function(err, data){
		if(err){
			console.log(err);
			return;
		}
		console.log(myObj);
		resolve(data) 
		console.log(myObj);
		
	})
	});
}
 async function c() {
 	myObj.data1 = await a();
 	myObj.data2 = await b();
 	console.log(myObj);

 }



console.log(myObj);