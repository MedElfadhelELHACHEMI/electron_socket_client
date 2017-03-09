var io = require('socket.io-client');

var socket = io('http://localhost:5000');


document.getElementById('form').onsubmit = function (e){
  e.preventDefault();
  var x=document.getElementById('event').value;
  var y=document.getElementById('msg').value;
  socket.emit(x,y)

}
socket.on('response',function(msg){
	console.log(msg)
})