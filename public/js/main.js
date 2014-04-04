var socket = io.connect('/');
socket.on('connect', function(socket) {
    alert("Conectado");
});
socket.on('respuesta', function(data) {
    console.log(data.message);
});